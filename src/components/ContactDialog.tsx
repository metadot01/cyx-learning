import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Send, Building2, Mail, User, MessageSquare, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactDialogProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const ContactDialog = ({ trigger, open: controlledOpen, onOpenChange }: ContactDialogProps) => {
  const { toast } = useToast();
  const [internalOpen, setInternalOpen] = useState(false);
  
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = isControlled ? (onOpenChange || (() => {})) : setInternalOpen;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="hero" size="default">
            <MessageCircle className="w-4 h-4 mr-2" />
            Start Conversation
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-navy border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white text-center">
            Enterprise <span className="text-emerald">Inquiries</span>
          </DialogTitle>
          <p className="text-white/70 text-center text-sm pt-2">
            Ready to upskill your team? Let's discuss how CYXOR LEARNING can help your organization.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="dialog-name" className="text-sm font-medium text-white flex items-center gap-2">
                <User className="w-4 h-4 text-emerald" />
                Full Name
              </label>
              <Input
                id="dialog-name"
                name="name"
                type="text"
                placeholder="John Smith"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-emerald"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="dialog-email" className="text-sm font-medium text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald" />
                Work Email
              </label>
              <Input
                id="dialog-email"
                name="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-emerald"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="dialog-company" className="text-sm font-medium text-white flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald" />
              Company Name
            </label>
            <Input
              id="dialog-company"
              name="company"
              type="text"
              placeholder="Acme Corporation"
              value={formData.company}
              onChange={handleChange}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-emerald"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="dialog-message" className="text-sm font-medium text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald" />
              How can we help?
            </label>
            <Textarea
              id="dialog-message"
              name="message"
              placeholder="Tell us about your training needs, team size, and any specific requirements..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-emerald resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>

          <p className="text-center text-white/50 text-xs">
            We typically respond within 24 hours on business days.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
