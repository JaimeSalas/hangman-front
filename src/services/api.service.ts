// This service will interact with GitHub REST API
const maMembersToLogins = (members: any[]): string[] =>  members.map(m => m.login);

export const retrieveMembersByOrg = (org: string): Promise<string[]> => {
    // https://api.github.com/orgs/{organization name}/members

    return fetch(`https://api.github.com/orgs/${org}/members`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .then((result: Array<any>) => {
            return result.map(r => r.login);
        })
        // .then((result: Array<any>) => result.map(r => r.login))
        // .then(maMembersToLogins)
        .catch((err) => {
            console.error(err);
            throw err;
        });

    // return Promise.resolve([
    //     'foo0000001',
    //     'foobbbbbb2',
    //     'f3',
    //     'fmmmmm4',
    //     'foo5',
    //     'fooiooi6',
    //     'foo7',
    // ]);
};