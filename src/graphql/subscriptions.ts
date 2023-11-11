/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateReservation = /* GraphQL */ `subscription OnCreateReservation(
  $filter: ModelSubscriptionReservationFilterInput
) {
  onCreateReservation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReservationSubscriptionVariables,
  APITypes.OnCreateReservationSubscription
>;
export const onUpdateReservation = /* GraphQL */ `subscription OnUpdateReservation(
  $filter: ModelSubscriptionReservationFilterInput
) {
  onUpdateReservation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReservationSubscriptionVariables,
  APITypes.OnUpdateReservationSubscription
>;
export const onDeleteReservation = /* GraphQL */ `subscription OnDeleteReservation(
  $filter: ModelSubscriptionReservationFilterInput
) {
  onDeleteReservation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReservationSubscriptionVariables,
  APITypes.OnDeleteReservationSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
