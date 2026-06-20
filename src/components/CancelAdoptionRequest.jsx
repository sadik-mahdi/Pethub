"use client";

import {AlertDialog, Button} from "@heroui/react";

export function CancelAdoptionRequest({requestId}) {
  console.log(requestId);

  const handleCancelRequest = async() => {
    const res = await fetch(`http://localhost:5000/request/${requestId}`,{
      method : "DELETE",
      headers : {
        "content-type" : "application/json"
      },
    })
    const data = await res.json();
    window.location.reload();
  }

  return (
    <AlertDialog>
      <Button variant="danger">Cancel Adoption</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Adoption Request?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Adoption Request</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleCancelRequest}>
                Delete Request
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}