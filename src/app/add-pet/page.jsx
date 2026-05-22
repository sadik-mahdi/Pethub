'use client'
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button } from '@heroui/react';

const AddPet = () => {

  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const pet = Object.fromEntries(formData.entries())

    console.log(pet);

    const res = await fetch(`http://localhost:5000/pet`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json' 
      },
      body: JSON.stringify(pet)
    })

    const data = await res.json();
    console.log(data);
    
  }

  return (
    <div >
      <div><h2 className=" text-orange-400 font-bold text-4xl pt-10 text-center ">Add Pet</h2></div>
      <form className="p-10 space-y-8" onSubmit={onSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* pet Name */}
              <div className="md:col-span-2">
                <TextField name="petName" isRequired>
                  <Label>Pet Name</Label>
                  <Input placeholder="Enter Your Pet Name" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Species */}
              <div>
                <Select
                  name="species"
                  isRequired
                  className="w-full"
                  placeholder="Select Species"
                >
                  <Label>Species</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Dog" textValue="Dog">
                        Dog
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Cat" textValue="Cat">
                        Cat
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Bird" textValue="Bird">
                        Bird
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Others" textValue="Others">
                        Others
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Breed */}
              <TextField name="breed" >
                <Label>Breed</Label>
                <Input placeholder="breed" className="rounded-2xl" />
                <FieldError />
              </TextField>

              <TextField name="age" >
                <Label>Age</Label>
                <Input placeholder="Age" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Gender */}
              <div>
                <Select
                  name="gender"
                  isRequired
                  className="w-full"
                  placeholder="Select Species"
                >
                  <Label>Gender</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="male" textValue="male">
                        Male
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="female" textValue="female">
                        Female
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>

                  <Input
                    type="url"
                    name="imageUrl"
                    placeholder="https://example.com/image.jpg"
                    className="rounded-2xl"
                  />

                  <FieldError />
                </TextField>
              </div>

              {/* Health Status */}
              <TextField name="healthStatus" >
                <Label>Health Status</Label>
                <Input placeholder="Good/Average/Bad" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Vacnination Status */}
              <div>
                <Select
                  name="vaccinationStatus"
                  isRequired
                  className="w-full"
                  placeholder="Select Vaccination Status"
                >
                  <Label>Vaccination Status</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="vaccinated" textValue="vaccinated">
                        Vaccinated
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="not-vaccinated" textValue="not-vaccinated">
                        Not-Vaccinated
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* location */}
              <TextField name="location" >
                <Label>Location</Label>
                <Input
                  placeholder="Location"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* adoption fee */}
              <TextField name="adoptionFee" type="adoption-fee" isRequired>
                <Label>Adoption Fee</Label>
                <Input
                  type="number"
                  placeholder="Fee"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe the travel experience..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Duration */}
              <TextField name="OwnerEmail" isRequired>
                <Label>Email</Label>
                <Input
                  placeholder="demo@gmail.com"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Buttons */}
            <Button
              type="submit"
              variant="outline"
              className=" rounded-none w-full bg-cyan-500 text-white"
            >
              Add pet
            </Button>
          </form>
    </div>
  );
};

export default AddPet;