"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerConnectionService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const store_service_1 = require("./store.service");
let ServerConnectionService = exports.ServerConnectionService = class ServerConnectionService {
    constructor(httpClient, store) {
        this.httpClient = httpClient;
        this.store = store;
    }
    async checkServerConnection(endPoint) {
        const url = `${endPoint}/api`;
        return new Promise((resolve, reject) => {
            console.log(`Checking server connection in ServerConnectionService in desktop-ui-lib on URL: ${url}`);
            if (endPoint !== 'http://localhost:3000') {
                try {
                    const requestObservable = this.httpClient.get(url);
                    if (!requestObservable) {
                        console.error('Failed to create an Observable from the HTTP request.');
                        reject('Failed to create an Observable from the HTTP request.');
                        return;
                    }
                    requestObservable.subscribe({
                        next: (resp) => {
                            if (resp) {
                                this.store.serverConnection = resp.status;
                                console.log(`Server connection status in ServerConnectionService in desktop-ui-lib for URL: ${url} is: `, resp.status);
                                resolve(true);
                            }
                            else {
                                console.log('Server connection resp empty');
                                resolve(false);
                            }
                        },
                        error: (err) => {
                            console.error(`Error checking server connection in ServerConnectionService for URL: ${url}`, err);
                            if (this.store.userId) {
                                console.log(`We were unable to connect to the server, but we have a user id ${this.store.userId}.`);
                                resolve(true);
                            }
                            else {
                                this.store.serverConnection = err.status;
                                reject(err);
                            }
                        }
                    });
                }
                catch (error) {
                    console.error(`Error checking server connection in ServerConnectionService for URL: ${url}`, error);
                    reject(error);
                }
            }
            else {
                console.log(`Skip checking server connection for URL: ${url}`);
                resolve(true);
            }
        });
    }
};
exports.ServerConnectionService = ServerConnectionService = tslib_1.__decorate([
    (0, core_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient, store_service_1.Store])
], ServerConnectionService);
//# sourceMappingURL=server-connection.service.js.map