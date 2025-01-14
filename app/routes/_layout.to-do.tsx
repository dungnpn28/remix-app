import { Label } from "@radix-ui/react-label";
import { Form } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { DatePicker } from "~/components/ui/date-picker";
import { Input } from "~/components/ui/input";

export default function InboxPage() {
  return (
    <>
      <Form method="post" className="flex flex-col h-screen items-center justify-center gap-4">
        <div className="w-1/3">
        <Label htmlFor="task-title">Task title</Label>
        <Input id="task-title" name="task-title" placeholder="What's the title of the task?" />
        </div>
        <div className="w-1/3">
        <Label htmlFor="task-description">Task description</Label>
        <Input
          id="task-description"
          name="task-description"
          placeholder="What's the description of the task?"
        />
        </div>
        <div className="w-1/3">
        <DatePicker placeholder="When's the due date?"/>
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </>
    
  );
}
