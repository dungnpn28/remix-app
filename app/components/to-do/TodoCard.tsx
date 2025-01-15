import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '~/components/ui/card';
import { Input } from '../ui/input';

interface TodoCardProps {
    title: string;
    description: string;
    dueDate: string;
}

const TodoCard: React.FC<TodoCardProps> = ({ title, description, dueDate }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{description}</CardDescription>
                <Input type="date" value={dueDate} disabled />
            </CardContent>
        </Card>
    );
};

export default TodoCard;