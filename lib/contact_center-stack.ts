import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { configuration } from '../config/config';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';

const {
  env,
} = configuration

export class ContactCenterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    /**--------------- ROLES ----------------*/
    const lambdaRole = new iam.Role(this, "ConnectLambdaExecutionRole", {
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
    });

    lambdaRole.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")
    );

    /**--------------- LAMBDAS ----------------*/
    const generateAedtDateTime = new NodejsFunction(this, "GenerateAedtDateTime", {
      entry: 'src/lambdas/generateAedtDateTime/handler.ts', 
      runtime: Runtime.NODEJS_22_X, 
      handler: "handler", 
      functionName: `${env}-generateAedtDateTime`,
      timeout: Duration.seconds(8),
      role: lambdaRole
    });

    generateAedtDateTime.grantInvoke(new iam.ServicePrincipal("connect.amazonaws.com"));
  }
}