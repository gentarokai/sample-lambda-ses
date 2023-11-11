/* Amplify Params - DO NOT EDIT
	API_SAMPLELAMBDASES_GRAPHQLAPIENDPOINTOUTPUT
	API_SAMPLELAMBDASES_GRAPHQLAPIIDOUTPUT
	API_SAMPLELAMBDASES_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */ /**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// ライブラリのインポート
const AWS = require("aws-sdk");
const gql = require("graphql-tag");
const AWSAppSyncClient = require("aws-appsync").default;

// ユーザーIDを使用してユーザー情報を取得するクエリ
const query = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
// AppSyncのAPIを使用してユーザー情報を取得するメソッド
const getUserQuery = async (userId) => {
  // Appsyncクライアントの作成
  const client = new AWSAppSyncClient({
    // GraphQLのエンドポイントURL
    url: process.env.API_SAMPLELAMBDASES_GRAPHQLAPIENDPOINTOUTPUT,
    region: process.env.REGION,
    auth: {
      type: "API_KEY",
      // 環境変数のAPI KEY
      apiKey: process.env.API_SAMPLELAMBDASES_GRAPHQLAPIKEYOUTPUT,
    },
    disableOffline: true,
  });
  // Appsyncのクエリを実行
  const graphqlData = await client.query({
    query: query,
    variables: { id: userId },
    authMode: "API_KEY",
  });

  // ユーザー情報を返却
  return graphqlData.data.getUser;
};

// メール送信ロジック
const sendEmail = async (params) => {
  const ses = new AWS.SES();
  try {
    await ses.sendEmail(params).promise();
    console.log("email sent");
  } catch (err) {
    console.log("error sending email", err);
  }
};

// メインロジック
exports.handler = async (event) => {
  for (const record of event.Records) {
    if (record.eventName === "INSERT") {
      // 予約情報からユーザーIDを取り出す
      const reservation = record.dynamodb.NewImage;
      const userId = reservation.reservationUserId.S;
      // ユーザー情報を取得
      const user = await getUserQuery(userId);
      if (user) {
        const email = user.email;
        // メール内容の作成
        const params = {
          Destination: {
            ToAddresses: [email],
          },
          Message: {
            Body: {
              Text: {
                Data: `Dear ${user.name}, your reservation has been confirmed.`,
              },
            },
            Subject: {
              Data: "Reservation confirmed",
            },
          },
          Source: process.env.EMAIL_FROM,
        };
        // メール送信
        return sendEmail(params);
      }
    }
  }
};
