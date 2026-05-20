'use client'
import {Envelope} from "@gravity-ui/icons";
import {Button, DateField, Input, Label, Modal, Surface, TextField} from "@heroui/react";

const PetRequestForm = ({pet}) => {
  
  const {_id,petName,imageUrl,species,vaccinationStatus,breed,age,gender,healthStatus,location,adoptionFee,description} = pet;

  return (
    <div>
      <Modal>
      <Button variant="secondary">Pet Request Form</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Request to Adopt {petName}</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-black">
                Fill out the form below and owner will get back to you
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="petName" type="text" variant="secondary">
                    <Label>Pet Name</Label>
                    <Input placeholder={petName} />
                  </TextField>
                  <TextField className="w-full" name="Name" type="text" variant="secondary">
                    <Label>Your Name</Label>
                    <Input placeholder="Your Name" />
                  </TextField>

                  <TextField className="w-full" name="email" type="email" variant="secondary">
                    <Label>Email</Label>
                    <Input placeholder="User email" />
                  </TextField>

                  <TextField className="w-full" name="date">
                    <DateField >
                      <Label>Pickup Date</Label>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField>
                  </TextField>

                  <TextField className="w-full" name="message" variant="secondary">
                    <Label>Message to Owner</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Adopt</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
                </Modal>
    </div>
  );
};

export default PetRequestForm;