const {
    AWS_REGION,
    ENV,
    REALM,
    AWS_ACCOUNT_ID,
    REPO_URL,
} = process.env

type Configuration = {
    aws: {
        region: string
        account: string
    }
    env: string
    realm: string   
    repo_url: string
}

export const configuration : Configuration = {
    aws: {
        region: AWS_REGION || 'ap-southeast-2',
        account: `${AWS_ACCOUNT_ID}`,
    },
    env: ENV || 'Dev',
    realm: REALM || 'NonProd',
    repo_url: `${REPO_URL}`,
}