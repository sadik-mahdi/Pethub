'use client'
import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, DateField, Form, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

const PetRequestForm = ({pet}) => {

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [pickUpDate, setPickUpDate] = useState(null);
  
  const {petName} = pet;

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);
  }

  const handleAdoptionRequest = async() => {
    const requestData = {
      userId : user?.id,
      userImage : user?.image,
      userName : user?.name,
      userEmail : user?.email,
      petId : pet._id,
      petName : pet.petName,
      pickUpDate : new Date(pickUpDate)
    }

    const {data:tokenData} = await authClient.token()
    console.log(tokenData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/request`,{
      method : 'POST',
      headers : {
        'content-type' : 'application/json',
        authorization : `Bearer ${tokenData?.token}`
      },
      body : JSON.stringify(requestData)
    })

    const data = await res.json();
    toast.success('Adoption request sent successfully');

  }

  return (
    <div className="bg-orange-500 py-20 rounded-2xl">
      <Form onSubmit={onSubmit}>
        <Modal>
          <Button variant="secondary">Pet Request Form</Button>
          <Modal.Backdrop>
            <Modal.Container placement="auto">
              <Modal.Dialog className="sm:max-w-md">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading>Request to Adopt {petName}</Modal.Heading>
                  <p className="mt-1.5 text-sm leading-5 text-black">
                    Click on the Pet Request Form
                    Fill out the form below and owner will get back to you
                  </p>
                </Modal.Header>
                <Modal.Body className="p-6">
                  <Surface variant="default">
                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                      <TextField className="w-full" name="petName" type="text" variant="secondary">
                        <Label>Pet Name</Label>
                        <Input readOnly placeholder={petName} />
                      </TextField>
                      
                      <TextField className="w-full" name="Name" type="text" variant="secondary">
                        <Label>Your Name</Label>
                        <Input readOnly placeholder={user?.name} />
                      </TextField>

                      <TextField className="w-full" name="email" type="email" variant="secondary">
                        <Label>Email</Label>
                        <Input readOnly placeholder= {user?.email} />
                      </TextField>

                      <DateField name="date" onChange={setPickUpDate} variant="secondary">
                        <Label>Preferred Pickup Date</Label>
                        <DateField.Group>
                          <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                        </DateField.Group>
                      </DateField>

                      <TextField className="w-full" name="message" variant="secondary">
                        <Label>Message to Owner</Label>
                        <Input placeholder="Enter your message" />
                      </TextField>
                    </form>
                  </Surface>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={handleAdoptionRequest} >Adopt</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      </Form>
    </div>
  );
};

export default PetRequestForm;