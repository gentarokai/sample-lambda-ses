import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { API, Amplify } from "aws-amplify";
import { createReservation, createUser } from "./graphql/mutations";
import { useForm } from "react-hook-form";
import { CreateReservationMutation, CreateUserMutation } from "./API";
import { GraphQLQuery } from "@aws-amplify/api";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
function App() {
  // フォーム送信時の処理
  const onSubmit = async (input: Inputs) => {
    // ユーザーデータの登録
    const res = await API.graphql<GraphQLQuery<CreateUserMutation>>({
      query: createUser,
      variables: {
        input: {
          name: input.name,
          email: input.email,
        },
      },
      authMode: "API_KEY",
    });
    if (res.data && res.data.createUser) {
      // 予約データの登録
      await API.graphql<GraphQLQuery<CreateReservationMutation>>({
        query: createReservation,
        variables: {
          input: {
            date: input.date,
            comments: input.comments,
            reservationUserId: res.data.createUser.id,
          },
        },
        authMode: "API_KEY",
      });
    }
    console.log(res);
  };

  type Inputs = {
    name: string;
    email: string;
    date: string;
    comments: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  return (
    <ChakraProvider>
      <Box w="50vh" marginX={50}>
        <Stack spacing={3}>
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel htmlFor="name">First name</FormLabel>
              <Input
                id="name"
                placeholder="name"
                {...register("name", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">email</FormLabel>
              <Input
                id="email"
                placeholder="email"
                {...register("email", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="date">date</FormLabel>
              <Input
                id="date"
                placeholder="date"
                type="datetime-local"
                {...register("date", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.date && errors.date.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="comments">comments</FormLabel>
              <Input
                id="comments"
                placeholder="comments"
                {...register("comments", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.comments && errors.comments.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
