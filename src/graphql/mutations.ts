/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createReservation = /* GraphQL */ `mutation CreateReservation(
  $input: CreateReservationInput!
  $condition: ModelReservationConditionInput
) {
  createReservation(input: $input, condition: $condition) {
    id
    user {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
    date
    comments
    createdAt
    updatedAt
    reservationUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReservationMutationVariables,
  APITypes.CreateReservationMutation
>;
export const updateReservation = /* GraphQL */ `mutation UpdateReservation(
  $input: UpdateReservationInput!
  $condition: ModelReservationConditionInput
) {
  updateReservation(input: $input, condition: $condition) {
    id
    user {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
    date
    comments
    createdAt
    updatedAt
    reservationUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReservationMutationVariables,
  APITypes.UpdateReservationMutation
>;
export const deleteReservation = /* GraphQL */ `mutation DeleteReservation(
  $input: DeleteReservationInput!
  $condition: ModelReservationConditionInput
) {
  deleteReservation(input: $input, condition: $condition) {
    id
    user {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
    date
    comments
    createdAt
    updatedAt
    reservationUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReservationMutationVariables,
  APITypes.DeleteReservationMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
