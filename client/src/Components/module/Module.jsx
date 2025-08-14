import { Dialog, DialogContent } from "@/components/ui/dialog";

const Module = ({ children, open, onChange }) => {
  return (
    <Dialog open={open} onOpenChange={onChange}>
      <DialogContent className="p-0 border-0 text-white">
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Module;
