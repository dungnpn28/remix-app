import { Label } from "@radix-ui/react-label";
import { ActionFunctionArgs } from "@remix-run/node";
import { Form, useFetcher } from "@remix-run/react";
import TodoCard from "~/components/to-do/TodoCard";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function InboxPage() {
  const fetcher = useFetcher();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    fetcher.submit(formData, {
      action: "/to-do",
      method: "post",
    });
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="flex flex-col h-screen items-center justify-center gap-4"
      >
        <div className="w-1/3">
          <Label htmlFor="taskTitle">Task title</Label>
          <Input
            id="taskTitle"
            name="taskTitle"
            placeholder="What's the title of the task?"
          />
        </div>
        <div className="w-1/3">
          <Label htmlFor="taskDescription">Task description</Label>
          <Input
            id="taskDescription"
            name="taskDescription"
            placeholder="What's the description of the task?"
          />
        </div>
        <div className="w-1/3">
          <Label htmlFor="taskDueDate">Task due date</Label>
          <Input type="date" id="taskDueDate" name="taskDueDate" />
        </div>
        <Button type="submit">Add</Button>
      </Form>
      
    </>
  );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return new Response("OK", {
    status: 200,
  });
};
