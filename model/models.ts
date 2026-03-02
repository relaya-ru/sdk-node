import localVarRequest from 'request';

export * from './accountModuleItem';
export * from './accountModuleUsageItem';
export * from './accountModulesListResponseBody';
export * from './accountModulesUsageResponseBody';
export * from './accountSettings';
export * from './apiScopeInfo';
export * from './apiScopesListResponseBody';
export * from './apiTokenItem';
export * from './apiTokensListResponseBody';
export * from './authTokenInputBody';
export * from './authTokenOutputBody';
export * from './authorizationResultData';
export * from './backupPayload';
export * from './backupProfile';
export * from './backupProfileAuth';
export * from './backupUser';
export * from './backupWebhook';
export * from './botTokenInputBody';
export * from './botTokenResponseBody';
export * from './botTokenSetResponseBody';
export * from './changePasswordInputBody';
export * from './changePasswordResponseBody';
export * from './chatHistoryInputBody';
export * from './contactsListHumaBody';
export * from './conversationActionInputBody';
export * from './conversationActionResponseBody';
export * from './conversationAvatarInputBody';
export * from './conversationAvatarMeta';
export * from './conversationAvatarResponseBody';
export * from './conversationMeta';
export * from './createApiTokenInputBody';
export * from './createProfileInputBody';
export * from './createUserInputBody';
export * from './createUserResponseBody';
export * from './dashboardKPI';
export * from './dashboardMessagePoint';
export * from './dashboardMessages30d';
export * from './dashboardSetup';
export * from './deleteMessageBody';
export * from './deleteMessageInputBody';
export * from './editMessageInputBody';
export * from './emailVerifyConfirmInputBody';
export * from './emailVerifyConfirmResponseBody';
export * from './emailVerifyRequestInputBody';
export * from './emailVerifyRequestResponseBody';
export * from './errorDetail';
export * from './errorModel';
export * from './forwardMessageInputBody';
export * from './inboxConversationItem';
export * from './inboxConversationsListResponseBody';
export * from './inboxMessageItem';
export * from './inboxMessagesListResponseBody';
export * from './inboxReadInputBody';
export * from './inboxReadResponseBody';
export * from './logoutBody';
export * from './markReadInputBody';
export * from './maxBlockedContactsResponseBody';
export * from './maxChatSubscriptionInputBody';
export * from './maxChatSubscriptionResponseBody';
export * from './maxChatsByIDsInputBody';
export * from './maxChatsByIDsResponseBody';
export * from './maxContact';
export * from './maxContactName';
export * from './maxContactsByIDsInputBody';
export * from './maxContactsByIDsResponseBody';
export * from './maxContactsLastOnlineInputBody';
export * from './maxContactsLastOnlineResponseBody';
export * from './maxCreateFolderInputBody';
export * from './maxFolder';
export * from './maxFoldersResponseBody';
export * from './maxProfile';
export * from './maxReorderFoldersInputBody';
export * from './maxSession';
export * from './maxSessionsResponseBody';
export * from './maxSetProfileInputBody';
export * from './maxSetProfileResponseBody';
export * from './maxSetUserSettingsInputBody';
export * from './maxUserSettingsPatch';
export * from './maxUserSettingsResponseBody';
export * from './maxUserSettingsState';
export * from './maxVideoResolveInputBody';
export * from './maxVideoResolveResponseBody';
export * from './maxWSCallInputBody';
export * from './maxWSCallResponseBody';
export * from './messageResponseBody';
export * from './notificationItem';
export * from './notificationsListResponseBody';
export * from './oAuthPendingCompleteEmailInputBody';
export * from './oAuthProviderInfo';
export * from './oAuthProvidersOutputBody';
export * from './oAuthResolveOutputBody';
export * from './oAuthStartOutputBody';
export * from './password2FAInputBody';
export * from './phoneAuthCodeInputBody';
export * from './phoneAuthCodeResponseBody';
export * from './phoneAuthPasswordInputBody';
export * from './phoneAuthPasswordResponseBody';
export * from './phoneAuthStartInputBody';
export * from './phoneAuthStartResponseBody';
export * from './pollAuthorizationBody';
export * from './pollAuthorizationInputBody';
export * from './profileActionItem';
export * from './profileActionsListResponseBody';
export * from './profileRenewOutputBody';
export * from './profileResponse';
export * from './profilesListResponseBody';
export * from './qRStatusResponseBody';
export * from './reactionRef';
export * from './reactionStruct';
export * from './readChatBody';
export * from './readChatHumaInputBody';
export * from './rebootProfileBody';
export * from './removeReactionBody';
export * from './removeReactionHumaInputBody';
export * from './restoreDataInputBody';
export * from './searchContactInputBody';
export * from './searchContactResponseBody';
export * from './sendAuthorizationCodeBody';
export * from './sendAuthorizationCodeInputBody';
export * from './sendMessageInputBody';
export * from './sendReactionBody';
export * from './sendReactionHumaInputBody';
export * from './sendReplyMessageInputBody';
export * from './sendTypingInputBody';
export * from './sendTypingResponseBody';
export * from './sessionActionInputBody';
export * from './sessionChatsResponseBody';
export * from './sessionClearResponseBody';
export * from './sessionDataInputBody';
export * from './sessionEventsResponseBody';
export * from './sessionGetResponseBody';
export * from './sessionItem';
export * from './sessionSetResponseBody';
export * from './sessionStartInputBody';
export * from './sessionStartResponseBody';
export * from './sessionStopResponseBody';
export * from './sessionsListResponseBody';
export * from './setSettingsBody';
export * from './setSettingsInputBody';
export * from './startAuthorizationBody';
export * from './startAuthorizationInputBody';
export * from './stateProfileBody';
export * from './statusResponseBody';
export * from './syncProfileInputBody';
export * from './syncProfileResponseBody';
export * from './telegramPhoneVerifyConfirmInputBody';
export * from './telegramPhoneVerifyConfirmResponseBody';
export * from './telegramPhoneVerifyStartInputBody';
export * from './telegramPhoneVerifyStartResponseBody';
export * from './topUpInputBody';
export * from './topUpResponseBody';
export * from './topUpStatusResponseBody';
export * from './topUpStatusResponseItem';
export * from './topUpsListResponseBody';
export * from './transactionItem';
export * from './transactionsListResponseBody';
export * from './unreadCountResponseBody';
export * from './updateAccountModuleInputBody';
export * from './updateAccountModuleResponseBody';
export * from './updateProfileAutoRenewInputBody';
export * from './updateProfileInputBody';
export * from './userDashboardSummaryResponseBody';
export * from './userExistsResponseBody';
export * from './userInboxAvailableProfile';
export * from './userInboxConversationActionInputBody';
export * from './userInboxConversationActionResponseBody';
export * from './userInboxConversationAvatarInputBody';
export * from './userInboxConversationAvatarResponseBody';
export * from './userInboxConversationItem';
export * from './userInboxConversationMeta';
export * from './userInboxConversationTitleInputBody';
export * from './userInboxConversationTitleResponseBody';
export * from './userInboxConversationsListResponseBody';
export * from './userInboxMessageItem';
export * from './userInboxMessagesListResponseBody';
export * from './userInboxReadInputBody';
export * from './userInboxReadResponseBody';
export * from './userInboxSendInputBody';
export * from './userInboxSendResponseBody';
export * from './userMeResponseBody';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccountModuleItem } from './accountModuleItem';
import { AccountModuleUsageItem } from './accountModuleUsageItem';
import { AccountModulesListResponseBody } from './accountModulesListResponseBody';
import { AccountModulesUsageResponseBody } from './accountModulesUsageResponseBody';
import { AccountSettings } from './accountSettings';
import { ApiScopeInfo } from './apiScopeInfo';
import { ApiScopesListResponseBody } from './apiScopesListResponseBody';
import { ApiTokenItem } from './apiTokenItem';
import { ApiTokensListResponseBody } from './apiTokensListResponseBody';
import { AuthTokenInputBody } from './authTokenInputBody';
import { AuthTokenOutputBody } from './authTokenOutputBody';
import { AuthorizationResultData } from './authorizationResultData';
import { BackupPayload } from './backupPayload';
import { BackupProfile } from './backupProfile';
import { BackupProfileAuth } from './backupProfileAuth';
import { BackupUser } from './backupUser';
import { BackupWebhook } from './backupWebhook';
import { BotTokenInputBody } from './botTokenInputBody';
import { BotTokenResponseBody } from './botTokenResponseBody';
import { BotTokenSetResponseBody } from './botTokenSetResponseBody';
import { ChangePasswordInputBody } from './changePasswordInputBody';
import { ChangePasswordResponseBody } from './changePasswordResponseBody';
import { ChatHistoryInputBody } from './chatHistoryInputBody';
import { ContactsListHumaBody } from './contactsListHumaBody';
import { ConversationActionInputBody } from './conversationActionInputBody';
import { ConversationActionResponseBody } from './conversationActionResponseBody';
import { ConversationAvatarInputBody } from './conversationAvatarInputBody';
import { ConversationAvatarMeta } from './conversationAvatarMeta';
import { ConversationAvatarResponseBody } from './conversationAvatarResponseBody';
import { ConversationMeta } from './conversationMeta';
import { CreateApiTokenInputBody } from './createApiTokenInputBody';
import { CreateProfileInputBody } from './createProfileInputBody';
import { CreateUserInputBody } from './createUserInputBody';
import { CreateUserResponseBody } from './createUserResponseBody';
import { DashboardKPI } from './dashboardKPI';
import { DashboardMessagePoint } from './dashboardMessagePoint';
import { DashboardMessages30d } from './dashboardMessages30d';
import { DashboardSetup } from './dashboardSetup';
import { DeleteMessageBody } from './deleteMessageBody';
import { DeleteMessageInputBody } from './deleteMessageInputBody';
import { EditMessageInputBody } from './editMessageInputBody';
import { EmailVerifyConfirmInputBody } from './emailVerifyConfirmInputBody';
import { EmailVerifyConfirmResponseBody } from './emailVerifyConfirmResponseBody';
import { EmailVerifyRequestInputBody } from './emailVerifyRequestInputBody';
import { EmailVerifyRequestResponseBody } from './emailVerifyRequestResponseBody';
import { ErrorDetail } from './errorDetail';
import { ErrorModel } from './errorModel';
import { ForwardMessageInputBody } from './forwardMessageInputBody';
import { InboxConversationItem } from './inboxConversationItem';
import { InboxConversationsListResponseBody } from './inboxConversationsListResponseBody';
import { InboxMessageItem } from './inboxMessageItem';
import { InboxMessagesListResponseBody } from './inboxMessagesListResponseBody';
import { InboxReadInputBody } from './inboxReadInputBody';
import { InboxReadResponseBody } from './inboxReadResponseBody';
import { LogoutBody } from './logoutBody';
import { MarkReadInputBody } from './markReadInputBody';
import { MaxBlockedContactsResponseBody } from './maxBlockedContactsResponseBody';
import { MaxChatSubscriptionInputBody } from './maxChatSubscriptionInputBody';
import { MaxChatSubscriptionResponseBody } from './maxChatSubscriptionResponseBody';
import { MaxChatsByIDsInputBody } from './maxChatsByIDsInputBody';
import { MaxChatsByIDsResponseBody } from './maxChatsByIDsResponseBody';
import { MaxContact } from './maxContact';
import { MaxContactName } from './maxContactName';
import { MaxContactsByIDsInputBody } from './maxContactsByIDsInputBody';
import { MaxContactsByIDsResponseBody } from './maxContactsByIDsResponseBody';
import { MaxContactsLastOnlineInputBody } from './maxContactsLastOnlineInputBody';
import { MaxContactsLastOnlineResponseBody } from './maxContactsLastOnlineResponseBody';
import { MaxCreateFolderInputBody } from './maxCreateFolderInputBody';
import { MaxFolder } from './maxFolder';
import { MaxFoldersResponseBody } from './maxFoldersResponseBody';
import { MaxProfile } from './maxProfile';
import { MaxReorderFoldersInputBody } from './maxReorderFoldersInputBody';
import { MaxSession } from './maxSession';
import { MaxSessionsResponseBody } from './maxSessionsResponseBody';
import { MaxSetProfileInputBody } from './maxSetProfileInputBody';
import { MaxSetProfileResponseBody } from './maxSetProfileResponseBody';
import { MaxSetUserSettingsInputBody } from './maxSetUserSettingsInputBody';
import { MaxUserSettingsPatch } from './maxUserSettingsPatch';
import { MaxUserSettingsResponseBody } from './maxUserSettingsResponseBody';
import { MaxUserSettingsState } from './maxUserSettingsState';
import { MaxVideoResolveInputBody } from './maxVideoResolveInputBody';
import { MaxVideoResolveResponseBody } from './maxVideoResolveResponseBody';
import { MaxWSCallInputBody } from './maxWSCallInputBody';
import { MaxWSCallResponseBody } from './maxWSCallResponseBody';
import { MessageResponseBody } from './messageResponseBody';
import { NotificationItem } from './notificationItem';
import { NotificationsListResponseBody } from './notificationsListResponseBody';
import { OAuthPendingCompleteEmailInputBody } from './oAuthPendingCompleteEmailInputBody';
import { OAuthProviderInfo } from './oAuthProviderInfo';
import { OAuthProvidersOutputBody } from './oAuthProvidersOutputBody';
import { OAuthResolveOutputBody } from './oAuthResolveOutputBody';
import { OAuthStartOutputBody } from './oAuthStartOutputBody';
import { Password2FAInputBody } from './password2FAInputBody';
import { PhoneAuthCodeInputBody } from './phoneAuthCodeInputBody';
import { PhoneAuthCodeResponseBody } from './phoneAuthCodeResponseBody';
import { PhoneAuthPasswordInputBody } from './phoneAuthPasswordInputBody';
import { PhoneAuthPasswordResponseBody } from './phoneAuthPasswordResponseBody';
import { PhoneAuthStartInputBody } from './phoneAuthStartInputBody';
import { PhoneAuthStartResponseBody } from './phoneAuthStartResponseBody';
import { PollAuthorizationBody } from './pollAuthorizationBody';
import { PollAuthorizationInputBody } from './pollAuthorizationInputBody';
import { ProfileActionItem } from './profileActionItem';
import { ProfileActionsListResponseBody } from './profileActionsListResponseBody';
import { ProfileRenewOutputBody } from './profileRenewOutputBody';
import { ProfileResponse } from './profileResponse';
import { ProfilesListResponseBody } from './profilesListResponseBody';
import { QRStatusResponseBody } from './qRStatusResponseBody';
import { ReactionRef } from './reactionRef';
import { ReactionStruct } from './reactionStruct';
import { ReadChatBody } from './readChatBody';
import { ReadChatHumaInputBody } from './readChatHumaInputBody';
import { RebootProfileBody } from './rebootProfileBody';
import { RemoveReactionBody } from './removeReactionBody';
import { RemoveReactionHumaInputBody } from './removeReactionHumaInputBody';
import { RestoreDataInputBody } from './restoreDataInputBody';
import { SearchContactInputBody } from './searchContactInputBody';
import { SearchContactResponseBody } from './searchContactResponseBody';
import { SendAuthorizationCodeBody } from './sendAuthorizationCodeBody';
import { SendAuthorizationCodeInputBody } from './sendAuthorizationCodeInputBody';
import { SendMessageInputBody } from './sendMessageInputBody';
import { SendReactionBody } from './sendReactionBody';
import { SendReactionHumaInputBody } from './sendReactionHumaInputBody';
import { SendReplyMessageInputBody } from './sendReplyMessageInputBody';
import { SendTypingInputBody } from './sendTypingInputBody';
import { SendTypingResponseBody } from './sendTypingResponseBody';
import { SessionActionInputBody } from './sessionActionInputBody';
import { SessionChatsResponseBody } from './sessionChatsResponseBody';
import { SessionClearResponseBody } from './sessionClearResponseBody';
import { SessionDataInputBody } from './sessionDataInputBody';
import { SessionEventsResponseBody } from './sessionEventsResponseBody';
import { SessionGetResponseBody } from './sessionGetResponseBody';
import { SessionItem } from './sessionItem';
import { SessionSetResponseBody } from './sessionSetResponseBody';
import { SessionStartInputBody } from './sessionStartInputBody';
import { SessionStartResponseBody } from './sessionStartResponseBody';
import { SessionStopResponseBody } from './sessionStopResponseBody';
import { SessionsListResponseBody } from './sessionsListResponseBody';
import { SetSettingsBody } from './setSettingsBody';
import { SetSettingsInputBody } from './setSettingsInputBody';
import { StartAuthorizationBody } from './startAuthorizationBody';
import { StartAuthorizationInputBody } from './startAuthorizationInputBody';
import { StateProfileBody } from './stateProfileBody';
import { StatusResponseBody } from './statusResponseBody';
import { SyncProfileInputBody } from './syncProfileInputBody';
import { SyncProfileResponseBody } from './syncProfileResponseBody';
import { TelegramPhoneVerifyConfirmInputBody } from './telegramPhoneVerifyConfirmInputBody';
import { TelegramPhoneVerifyConfirmResponseBody } from './telegramPhoneVerifyConfirmResponseBody';
import { TelegramPhoneVerifyStartInputBody } from './telegramPhoneVerifyStartInputBody';
import { TelegramPhoneVerifyStartResponseBody } from './telegramPhoneVerifyStartResponseBody';
import { TopUpInputBody } from './topUpInputBody';
import { TopUpResponseBody } from './topUpResponseBody';
import { TopUpStatusResponseBody } from './topUpStatusResponseBody';
import { TopUpStatusResponseItem } from './topUpStatusResponseItem';
import { TopUpsListResponseBody } from './topUpsListResponseBody';
import { TransactionItem } from './transactionItem';
import { TransactionsListResponseBody } from './transactionsListResponseBody';
import { UnreadCountResponseBody } from './unreadCountResponseBody';
import { UpdateAccountModuleInputBody } from './updateAccountModuleInputBody';
import { UpdateAccountModuleResponseBody } from './updateAccountModuleResponseBody';
import { UpdateProfileAutoRenewInputBody } from './updateProfileAutoRenewInputBody';
import { UpdateProfileInputBody } from './updateProfileInputBody';
import { UserDashboardSummaryResponseBody } from './userDashboardSummaryResponseBody';
import { UserExistsResponseBody } from './userExistsResponseBody';
import { UserInboxAvailableProfile } from './userInboxAvailableProfile';
import { UserInboxConversationActionInputBody } from './userInboxConversationActionInputBody';
import { UserInboxConversationActionResponseBody } from './userInboxConversationActionResponseBody';
import { UserInboxConversationAvatarInputBody } from './userInboxConversationAvatarInputBody';
import { UserInboxConversationAvatarResponseBody } from './userInboxConversationAvatarResponseBody';
import { UserInboxConversationItem } from './userInboxConversationItem';
import { UserInboxConversationMeta } from './userInboxConversationMeta';
import { UserInboxConversationTitleInputBody } from './userInboxConversationTitleInputBody';
import { UserInboxConversationTitleResponseBody } from './userInboxConversationTitleResponseBody';
import { UserInboxConversationsListResponseBody } from './userInboxConversationsListResponseBody';
import { UserInboxMessageItem } from './userInboxMessageItem';
import { UserInboxMessagesListResponseBody } from './userInboxMessagesListResponseBody';
import { UserInboxReadInputBody } from './userInboxReadInputBody';
import { UserInboxReadResponseBody } from './userInboxReadResponseBody';
import { UserInboxSendInputBody } from './userInboxSendInputBody';
import { UserInboxSendResponseBody } from './userInboxSendResponseBody';
import { UserMeResponseBody } from './userMeResponseBody';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "UserInboxConversationActionInputBody.ActionEnum": UserInboxConversationActionInputBody.ActionEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountModuleItem": AccountModuleItem,
    "AccountModuleUsageItem": AccountModuleUsageItem,
    "AccountModulesListResponseBody": AccountModulesListResponseBody,
    "AccountModulesUsageResponseBody": AccountModulesUsageResponseBody,
    "AccountSettings": AccountSettings,
    "ApiScopeInfo": ApiScopeInfo,
    "ApiScopesListResponseBody": ApiScopesListResponseBody,
    "ApiTokenItem": ApiTokenItem,
    "ApiTokensListResponseBody": ApiTokensListResponseBody,
    "AuthTokenInputBody": AuthTokenInputBody,
    "AuthTokenOutputBody": AuthTokenOutputBody,
    "AuthorizationResultData": AuthorizationResultData,
    "BackupPayload": BackupPayload,
    "BackupProfile": BackupProfile,
    "BackupProfileAuth": BackupProfileAuth,
    "BackupUser": BackupUser,
    "BackupWebhook": BackupWebhook,
    "BotTokenInputBody": BotTokenInputBody,
    "BotTokenResponseBody": BotTokenResponseBody,
    "BotTokenSetResponseBody": BotTokenSetResponseBody,
    "ChangePasswordInputBody": ChangePasswordInputBody,
    "ChangePasswordResponseBody": ChangePasswordResponseBody,
    "ChatHistoryInputBody": ChatHistoryInputBody,
    "ContactsListHumaBody": ContactsListHumaBody,
    "ConversationActionInputBody": ConversationActionInputBody,
    "ConversationActionResponseBody": ConversationActionResponseBody,
    "ConversationAvatarInputBody": ConversationAvatarInputBody,
    "ConversationAvatarMeta": ConversationAvatarMeta,
    "ConversationAvatarResponseBody": ConversationAvatarResponseBody,
    "ConversationMeta": ConversationMeta,
    "CreateApiTokenInputBody": CreateApiTokenInputBody,
    "CreateProfileInputBody": CreateProfileInputBody,
    "CreateUserInputBody": CreateUserInputBody,
    "CreateUserResponseBody": CreateUserResponseBody,
    "DashboardKPI": DashboardKPI,
    "DashboardMessagePoint": DashboardMessagePoint,
    "DashboardMessages30d": DashboardMessages30d,
    "DashboardSetup": DashboardSetup,
    "DeleteMessageBody": DeleteMessageBody,
    "DeleteMessageInputBody": DeleteMessageInputBody,
    "EditMessageInputBody": EditMessageInputBody,
    "EmailVerifyConfirmInputBody": EmailVerifyConfirmInputBody,
    "EmailVerifyConfirmResponseBody": EmailVerifyConfirmResponseBody,
    "EmailVerifyRequestInputBody": EmailVerifyRequestInputBody,
    "EmailVerifyRequestResponseBody": EmailVerifyRequestResponseBody,
    "ErrorDetail": ErrorDetail,
    "ErrorModel": ErrorModel,
    "ForwardMessageInputBody": ForwardMessageInputBody,
    "InboxConversationItem": InboxConversationItem,
    "InboxConversationsListResponseBody": InboxConversationsListResponseBody,
    "InboxMessageItem": InboxMessageItem,
    "InboxMessagesListResponseBody": InboxMessagesListResponseBody,
    "InboxReadInputBody": InboxReadInputBody,
    "InboxReadResponseBody": InboxReadResponseBody,
    "LogoutBody": LogoutBody,
    "MarkReadInputBody": MarkReadInputBody,
    "MaxBlockedContactsResponseBody": MaxBlockedContactsResponseBody,
    "MaxChatSubscriptionInputBody": MaxChatSubscriptionInputBody,
    "MaxChatSubscriptionResponseBody": MaxChatSubscriptionResponseBody,
    "MaxChatsByIDsInputBody": MaxChatsByIDsInputBody,
    "MaxChatsByIDsResponseBody": MaxChatsByIDsResponseBody,
    "MaxContact": MaxContact,
    "MaxContactName": MaxContactName,
    "MaxContactsByIDsInputBody": MaxContactsByIDsInputBody,
    "MaxContactsByIDsResponseBody": MaxContactsByIDsResponseBody,
    "MaxContactsLastOnlineInputBody": MaxContactsLastOnlineInputBody,
    "MaxContactsLastOnlineResponseBody": MaxContactsLastOnlineResponseBody,
    "MaxCreateFolderInputBody": MaxCreateFolderInputBody,
    "MaxFolder": MaxFolder,
    "MaxFoldersResponseBody": MaxFoldersResponseBody,
    "MaxProfile": MaxProfile,
    "MaxReorderFoldersInputBody": MaxReorderFoldersInputBody,
    "MaxSession": MaxSession,
    "MaxSessionsResponseBody": MaxSessionsResponseBody,
    "MaxSetProfileInputBody": MaxSetProfileInputBody,
    "MaxSetProfileResponseBody": MaxSetProfileResponseBody,
    "MaxSetUserSettingsInputBody": MaxSetUserSettingsInputBody,
    "MaxUserSettingsPatch": MaxUserSettingsPatch,
    "MaxUserSettingsResponseBody": MaxUserSettingsResponseBody,
    "MaxUserSettingsState": MaxUserSettingsState,
    "MaxVideoResolveInputBody": MaxVideoResolveInputBody,
    "MaxVideoResolveResponseBody": MaxVideoResolveResponseBody,
    "MaxWSCallInputBody": MaxWSCallInputBody,
    "MaxWSCallResponseBody": MaxWSCallResponseBody,
    "MessageResponseBody": MessageResponseBody,
    "NotificationItem": NotificationItem,
    "NotificationsListResponseBody": NotificationsListResponseBody,
    "OAuthPendingCompleteEmailInputBody": OAuthPendingCompleteEmailInputBody,
    "OAuthProviderInfo": OAuthProviderInfo,
    "OAuthProvidersOutputBody": OAuthProvidersOutputBody,
    "OAuthResolveOutputBody": OAuthResolveOutputBody,
    "OAuthStartOutputBody": OAuthStartOutputBody,
    "Password2FAInputBody": Password2FAInputBody,
    "PhoneAuthCodeInputBody": PhoneAuthCodeInputBody,
    "PhoneAuthCodeResponseBody": PhoneAuthCodeResponseBody,
    "PhoneAuthPasswordInputBody": PhoneAuthPasswordInputBody,
    "PhoneAuthPasswordResponseBody": PhoneAuthPasswordResponseBody,
    "PhoneAuthStartInputBody": PhoneAuthStartInputBody,
    "PhoneAuthStartResponseBody": PhoneAuthStartResponseBody,
    "PollAuthorizationBody": PollAuthorizationBody,
    "PollAuthorizationInputBody": PollAuthorizationInputBody,
    "ProfileActionItem": ProfileActionItem,
    "ProfileActionsListResponseBody": ProfileActionsListResponseBody,
    "ProfileRenewOutputBody": ProfileRenewOutputBody,
    "ProfileResponse": ProfileResponse,
    "ProfilesListResponseBody": ProfilesListResponseBody,
    "QRStatusResponseBody": QRStatusResponseBody,
    "ReactionRef": ReactionRef,
    "ReactionStruct": ReactionStruct,
    "ReadChatBody": ReadChatBody,
    "ReadChatHumaInputBody": ReadChatHumaInputBody,
    "RebootProfileBody": RebootProfileBody,
    "RemoveReactionBody": RemoveReactionBody,
    "RemoveReactionHumaInputBody": RemoveReactionHumaInputBody,
    "RestoreDataInputBody": RestoreDataInputBody,
    "SearchContactInputBody": SearchContactInputBody,
    "SearchContactResponseBody": SearchContactResponseBody,
    "SendAuthorizationCodeBody": SendAuthorizationCodeBody,
    "SendAuthorizationCodeInputBody": SendAuthorizationCodeInputBody,
    "SendMessageInputBody": SendMessageInputBody,
    "SendReactionBody": SendReactionBody,
    "SendReactionHumaInputBody": SendReactionHumaInputBody,
    "SendReplyMessageInputBody": SendReplyMessageInputBody,
    "SendTypingInputBody": SendTypingInputBody,
    "SendTypingResponseBody": SendTypingResponseBody,
    "SessionActionInputBody": SessionActionInputBody,
    "SessionChatsResponseBody": SessionChatsResponseBody,
    "SessionClearResponseBody": SessionClearResponseBody,
    "SessionDataInputBody": SessionDataInputBody,
    "SessionEventsResponseBody": SessionEventsResponseBody,
    "SessionGetResponseBody": SessionGetResponseBody,
    "SessionItem": SessionItem,
    "SessionSetResponseBody": SessionSetResponseBody,
    "SessionStartInputBody": SessionStartInputBody,
    "SessionStartResponseBody": SessionStartResponseBody,
    "SessionStopResponseBody": SessionStopResponseBody,
    "SessionsListResponseBody": SessionsListResponseBody,
    "SetSettingsBody": SetSettingsBody,
    "SetSettingsInputBody": SetSettingsInputBody,
    "StartAuthorizationBody": StartAuthorizationBody,
    "StartAuthorizationInputBody": StartAuthorizationInputBody,
    "StateProfileBody": StateProfileBody,
    "StatusResponseBody": StatusResponseBody,
    "SyncProfileInputBody": SyncProfileInputBody,
    "SyncProfileResponseBody": SyncProfileResponseBody,
    "TelegramPhoneVerifyConfirmInputBody": TelegramPhoneVerifyConfirmInputBody,
    "TelegramPhoneVerifyConfirmResponseBody": TelegramPhoneVerifyConfirmResponseBody,
    "TelegramPhoneVerifyStartInputBody": TelegramPhoneVerifyStartInputBody,
    "TelegramPhoneVerifyStartResponseBody": TelegramPhoneVerifyStartResponseBody,
    "TopUpInputBody": TopUpInputBody,
    "TopUpResponseBody": TopUpResponseBody,
    "TopUpStatusResponseBody": TopUpStatusResponseBody,
    "TopUpStatusResponseItem": TopUpStatusResponseItem,
    "TopUpsListResponseBody": TopUpsListResponseBody,
    "TransactionItem": TransactionItem,
    "TransactionsListResponseBody": TransactionsListResponseBody,
    "UnreadCountResponseBody": UnreadCountResponseBody,
    "UpdateAccountModuleInputBody": UpdateAccountModuleInputBody,
    "UpdateAccountModuleResponseBody": UpdateAccountModuleResponseBody,
    "UpdateProfileAutoRenewInputBody": UpdateProfileAutoRenewInputBody,
    "UpdateProfileInputBody": UpdateProfileInputBody,
    "UserDashboardSummaryResponseBody": UserDashboardSummaryResponseBody,
    "UserExistsResponseBody": UserExistsResponseBody,
    "UserInboxAvailableProfile": UserInboxAvailableProfile,
    "UserInboxConversationActionInputBody": UserInboxConversationActionInputBody,
    "UserInboxConversationActionResponseBody": UserInboxConversationActionResponseBody,
    "UserInboxConversationAvatarInputBody": UserInboxConversationAvatarInputBody,
    "UserInboxConversationAvatarResponseBody": UserInboxConversationAvatarResponseBody,
    "UserInboxConversationItem": UserInboxConversationItem,
    "UserInboxConversationMeta": UserInboxConversationMeta,
    "UserInboxConversationTitleInputBody": UserInboxConversationTitleInputBody,
    "UserInboxConversationTitleResponseBody": UserInboxConversationTitleResponseBody,
    "UserInboxConversationsListResponseBody": UserInboxConversationsListResponseBody,
    "UserInboxMessageItem": UserInboxMessageItem,
    "UserInboxMessagesListResponseBody": UserInboxMessagesListResponseBody,
    "UserInboxReadInputBody": UserInboxReadInputBody,
    "UserInboxReadResponseBody": UserInboxReadResponseBody,
    "UserInboxSendInputBody": UserInboxSendInputBody,
    "UserInboxSendResponseBody": UserInboxSendResponseBody,
    "UserMeResponseBody": UserMeResponseBody,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
