"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	type SignInSchemaValues,
	signInSchema,
} from "@/types/auth/sign-in.type";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export const SignInForm = () => {
	const form = useForm<SignInSchemaValues>({
		mode: "all",
		resolver: zodResolver(signInSchema),
		criteriaMode: "firstError",
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (formData: SignInSchemaValues) => {
		console.log({ formData });
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					name="email"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="johndoe@exemplo.com"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="password"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Senha</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Pelo menos 8 caractes"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit">Entrar</Button>
			</form>
		</Form>
	);
};
