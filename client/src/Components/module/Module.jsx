import { Dialog, DialogContent } from "@/components/ui/dialog";

const Module = ({ children, open, onChange }) => {
  return (
    <Dialog open={open} onOpenChange={onChange}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Module;
