import { Options, Variables, Callbacks } from './types';
export { ClientError } from './types';
import 'cross-fetch/polyfill';
export declare function request<T extends any>(url: string, query: string, variables?: Variables): Promise<T>;
export default request;
export declare class GraphQLClient {
    static callbacks: Callbacks;
    private url;
    private options;
    constructor(url: string, options?: Options);
    request: <T extends any>(query: string, variables?: Variables | undefined) => Promise<T>;
}
