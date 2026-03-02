export * from './accountApi';
import { AccountApi } from './accountApi';
export * from './authApi';
import { AuthApi } from './authApi';
export * from './billingApi';
import { BillingApi } from './billingApi';
export * from './chatsApi';
import { ChatsApi } from './chatsApi';
export * from './dashboardApi';
import { DashboardApi } from './dashboardApi';
export * from './inboxApi';
import { InboxApi } from './inboxApi';
export * from './integrationsApi';
import { IntegrationsApi } from './integrationsApi';
export * from './maxApi';
import { MaxApi } from './maxApi';
export * from './messagesApi';
import { MessagesApi } from './messagesApi';
export * from './modulesApi';
import { ModulesApi } from './modulesApi';
export * from './notificationsApi';
import { NotificationsApi } from './notificationsApi';
export * from './profilesApi';
import { ProfilesApi } from './profilesApi';
export * from './scenariosApi';
import { ScenariosApi } from './scenariosApi';
export * from './sessionsApi';
import { SessionsApi } from './sessionsApi';
export * from './settingsApi';
import { SettingsApi } from './settingsApi';
export * from './systemApi';
import { SystemApi } from './systemApi';
export * from './tokensApi';
import { TokensApi } from './tokensApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
export * from './vkApi';
import { VkApi } from './vkApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccountApi, AuthApi, BillingApi, ChatsApi, DashboardApi, InboxApi, IntegrationsApi, MaxApi, MessagesApi, ModulesApi, NotificationsApi, ProfilesApi, ScenariosApi, SessionsApi, SettingsApi, SystemApi, TokensApi, UsersApi, VkApi, WebhooksApi];
