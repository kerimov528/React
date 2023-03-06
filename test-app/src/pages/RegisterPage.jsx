import React from 'react'
import { Button, FormControl, Typography, Stack } from "@mui/material";
import CustomTextField from "../components/CustomTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../schema/index";

const RegisterPage = () => {
    const {
        formState: { errors },
        handleSubmit,
        reset,
        control
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        resolver: yupResolver(formSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    return (
        <>
            <FormControl
                sx={{
                    width: "25vw",
                    bgcolor: "#fff",
                    mt: "3rem",
                    p: "1rem",
                    borderRadius: ".3rem",
                    boxShadow: "2px 3px 5px rgba(0,0,0,0.4)",
                }}
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography variant="h5" mb="1rem" fontWeight="700">
                    Page Form
                </Typography>
                <Stack spacing={2}>
                    <CustomTextField
                        label="Email"
                        name="email"
                        type='email'
                        errors={errors}
                        control={control}
                    />
                    <CustomTextField
                        value='1234'
                        label="Password"
                        name="password"
                        type='password'
                        errors={errors}
                        control={control}
                    />
                    <CustomTextField
                        label="Confirm Password"
                        name="confirmPassword"
                        type='password'
                        errors={errors}
                        control={control}
                    />
                </Stack>
                <Button
                    type="submit"
                    sx={{ cursor: "pointer", bgcolor: "tomato", mt: "1rem", p: "1rem" }}
                >
                    Submit
                </Button>
            </FormControl>
        </>
    )
}

export default RegisterPage