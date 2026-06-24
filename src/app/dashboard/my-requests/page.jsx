import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Eye } from "lucide-react";
import { CancelAdoptionRequest } from "@/components/CancelAdoptionRequest";

const MyRequestsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  const {token} = await auth.api.getToken({
    headers : await headers(),
  })

  const user = session?.user;
  if (!user) {
    return (
      <div className="text-center py-20 text-slate-400">
        Please log in to view your adoption requests.
      </div>
    );
  }

  let requests = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/request/${user?.id}`, {
      headers : {
        authorization : `Bearer ${token}`
      }
    });
    if (res.ok) {
      requests = await res.json();
    }
  } catch (error) {
    console.error("Error fetching requests:", error);
  }

  const totalRequests = requests?.length || 0;
  const pendingCount = requests?.filter(req => req.status?.toLowerCase() === 'pending').length || 0;
  const approvedCount = requests?.filter(req => req.status?.toLowerCase() === 'approved').length || 0;
  const rejectedCount = requests?.filter(req => req.status?.toLowerCase() === 'rejected').length || 0;

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className='max-w-6xl mx-auto px-2 text-slate-100 space-y-8'>
      {/* Header section */}
      <div className='space-y-2'>
        <span className='text-xs bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full border border-pink-500/20 font-semibold inline-block'>
          📋 My Requests
        </span>
        <h1 className='text-4xl font-black tracking-tight'>
          My <span className='text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-blue-500'>Adoption Requests</span>
        </h1>
        <p className='text-slate-400 text-sm'>Track the status of all your adoption requests here.</p>
      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
        <div className='text-center bg-[#151C2C] border border-white/5 py-6 rounded-2xl shadow-xl'>
          <h2 className='text-4xl font-black text-slate-200'>{totalRequests}</h2>
          <p className='text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1'>Total</p>
        </div>
        <div className='text-center bg-[#151C2C] border border-white/5 py-6 rounded-2xl shadow-xl'>
          <h2 className='text-4xl font-black text-yellow-400'>{pendingCount}</h2>
          <p className='text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1'>Pending</p>
        </div>
        <div className='text-center bg-[#151C2C] border border-white/5 py-6 rounded-2xl shadow-xl'>
          <h2 className='text-4xl font-black text-green-400'>{approvedCount}</h2>
          <p className='text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1'>Approved</p>
        </div>
        <div className='text-center bg-[#151C2C] border border-white/5 py-6 rounded-2xl shadow-xl'>
          <h2 className='text-4xl font-black text-red-400'>{rejectedCount}</h2>
          <p className='text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1'>Rejected</p>
        </div>
      </div>

      {/* Table Data Block */}
      <div className="bg-[#151C2C] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
        {totalRequests > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 text-slate-400 text-xs font-bold uppercase tracking-wider bg-black/10">
                  <th className="py-4 px-6">Pet Name</th>
                  <th className="py-4 px-6">Request Date</th>
                  <th className="py-4 px-6">Pickup Date</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {requests.map((request) => {
                  const isApproved = request.status?.toLowerCase() === 'approved';
                  const isRejected = request.status?.toLowerCase() === 'rejected';
                  
                  const statusStyles = isApproved
                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                    : isRejected
                    ? "bg-red-500/10 text-red-400 border-red-500/20"
                    : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";

                  return (
                    <tr key={request._id} className="hover:bg-white/5 transition-colors group">
                      <td className="py-4 px-6 font-bold text-white capitalize">
                        {request.petName || "Unknown Pet"}
                      </td>
                      <td className="py-4 px-6 text-slate-400">
                        {formatDate(request.createdAt || request.requestDate)}
                      </td>
                      <td className="py-4 px-6 text-slate-400">
                        {formatDate(request.pickUpDate)}
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold capitalize ${statusStyles}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            isApproved ? "bg-green-400" : isRejected ? "bg-red-400" : "bg-yellow-400"
                          }`} />
                          {request.status || "Pending"}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center flex items-center justify-between gap-2">
                        <Link href={`/pets/${request.petId}`} className="">
                          <Button 
                            variant="bordered" 
                            size="sm"
                            className='border-white/10 text-slate-300 text-xs font-semibold rounded-xl hover:bg-white/10 flex items-center'
                          >
                            <Eye size={14} /> View
                          </Button>
                        </Link>
                        <CancelAdoptionRequest requestId={request._id} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className='text-center py-16 text-slate-400 text-sm font-medium'>
            You have not submitted any adoption requests yet.
          </div>
        )}
      </div>

    </div>
  );
};

export default MyRequestsPage;