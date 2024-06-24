import { Button } from "@/components/ui/button";

function Index() {
  console.log("I am here!")
  return (
    <>
      {/* REPLACE & ADAPT THIS FILE AND THE SharedLayout.jsx FILE */}
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Here is you blank canvas
          </h3>
          <p className="text-sm text-muted-foreground">
            Start interating on this template to build your app
          </p>
          <Button className="mt-4">Click me</Button>
        </div>
      </div>
    </>
  );
}

export default Index;
