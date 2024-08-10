import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Search } from 'lucide-react';

const searchSchema = z.object({
    search: z.string().min(1, 'Search cannot be empty'),
});

type SearchSchemaType = z.infer<typeof searchSchema>;

function SearchInput() {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<SearchSchemaType>({ resolver: zodResolver(searchSchema) });

    const onSubmit: SubmitHandler<SearchSchemaType> = (data) => console.log(data);

    const onSearch = () => {
        const values = getValues(); // Get current form values
        console.log(values.search);
        // Optionally submit the form
        handleSubmit(onSubmit)();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row gap-5 items-center justify-center w-full px-6 py-10">
                <input
                    type="text"
                    className="bg-transparent w-full border rounded-xl px-4 py-2 text-md focus-visible:outline-none"
                    placeholder="Search"
                    {...register('search')}
                />
                <Search
                    strokeWidth={1}
                    className="cursor-pointer"
                    onClick={onSearch}
                />
            </div>
        </form>
    );
}

export default SearchInput;
