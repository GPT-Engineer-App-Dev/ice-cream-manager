import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

function Index() {
  const [parlors, setParlors] = useState([]);
  const [newParlor, setNewParlor] = useState("");
  const [editParlor, setEditParlor] = useState(null);
  const [editParlorName, setEditParlorName] = useState("");

  const addParlor = () => {
    setParlors([...parlors, { id: Date.now(), name: newParlor }]);
    setNewParlor("");
  };

  const deleteParlor = (id) => {
    setParlors(parlors.filter((parlor) => parlor.id !== id));
  };

  const startEditParlor = (parlor) => {
    setEditParlor(parlor);
    setEditParlorName(parlor.name);
  };

  const saveEditParlor = () => {
    setParlors(
      parlors.map((parlor) =>
        parlor.id === editParlor.id ? { ...parlor, name: editParlorName } : parlor
      )
    );
    setEditParlor(null);
    setEditParlorName("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ice Cream Parlor Management</h1>
      <div className="mb-4">
        <Input
          value={newParlor}
          onChange={(e) => setNewParlor(e.target.value)}
          placeholder="New Parlor Name"
          className="mr-2"
        />
        <Button onClick={addParlor}>Add Parlor</Button>
      </div>
      <div className="grid gap-4">
        {parlors.map((parlor) => (
          <Card key={parlor.id}>
            <CardHeader>
              <CardTitle>{parlor.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between">
              <Button variant="outline" onClick={() => startEditParlor(parlor)}>
                Edit
              </Button>
              <Button variant="destructive" onClick={() => deleteParlor(parlor.id)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {editParlor && (
        <Dialog open={true} onOpenChange={() => setEditParlor(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Parlor</DialogTitle>
            </DialogHeader>
            <Input
              value={editParlorName}
              onChange={(e) => setEditParlorName(e.target.value)}
              placeholder="Edit Parlor Name"
              className="mb-4"
            />
            <Button onClick={saveEditParlor}>Save</Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default Index;