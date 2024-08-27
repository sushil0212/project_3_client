import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Upload an image to a temporary storage before creating an animation.
     * The image is uploaded using multipart/form-data. the filename directive is optional and
     * if provided should contain up to 50 valid characters long.
     * Valid characters: a-z A-Z 0-9 . _ -
     * Supported mime types: image/jpeg,image/png
     * Storage duration: 24-48H
     *
     * @summary Upload image
     * @throws FetchError<400, types.UploadAnImageResponse400> BadRequestError | InvalidFileSizeError | InvalidImageResolutionError
     * @throws FetchError<401, types.UploadAnImageResponse401> AuthorizationError
     * @throws FetchError<402, types.UploadAnImageResponse402> InsufficientCreditsError
     * @throws FetchError<415, types.UploadAnImageResponse415> UnsupportedMimeTypeError
     * @throws FetchError<451, types.UploadAnImageResponse451> ImageModerationError | CelebrityRecognizedError
     */
    uploadAnImage(body?: types.UploadAnImageBodyParam): Promise<FetchResponse<201, types.UploadAnImageResponse201>>;
    /**
     * Delete image
     *
     * @throws FetchError<401, types.DeleteImageResponse401> AuthorizationError
     * @throws FetchError<404, types.DeleteImageResponse404> NotFoundError
     */
    deleteImage(metadata: types.DeleteImageMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get face detection
     *
     * @throws FetchError<400, types.GetFaceDetectionResponse400> BadRequestError
     * @throws FetchError<401, types.GetFaceDetectionResponse401> AuthorizationError
     * @throws FetchError<404, types.GetFaceDetectionResponse404> NotFoundError
     * @throws FetchError<415, types.GetFaceDetectionResponse415> UnsupportedMimeTypeError
     */
    getFaceDetection(body: types.GetFaceDetectionBodyParam): Promise<FetchResponse<200, types.GetFaceDetectionResponse200>>;
    /**
     * Upload an audio file to a temporary storage before creating an animation.
     * The audio is uploaded using multipart/form-data. the filename directive is optional and
     * if provided should contain up to 50 valid characters long.
     * The resulting file is stored as a .wav file in a 16kHz sample rate.
     * Valid characters: a-z A-Z 0-9 . _ -
     * Supported mime types: "audio/, video/"
     * Storage duration: 24-48H
     *
     * @summary Upload audio file
     * @throws FetchError<400, types.UploadAnAudioResponse400> BadRequestError | InvalidFileSizeError | InvalidAudioDurationError
     * @throws FetchError<401, types.UploadAnAudioResponse401> AuthorizationError
     * @throws FetchError<402, types.UploadAnAudioResponse402> InsufficientCreditsError
     * @throws FetchError<415, types.UploadAnAudioResponse415> UnsupportedMimeTypeError
     * @throws FetchError<451, types.UploadAnAudioResponse451> AudioModerationError
     */
    uploadAnAudio(body?: types.UploadAnAudioBodyParam): Promise<FetchResponse<201, types.UploadAnAudioResponse201>>;
    /**
     * Delete an audio file
     *
     * @throws FetchError<401, types.DeleteAudioResponse401> AuthorizationError
     * @throws FetchError<404, types.DeleteAudioResponse404> NotFoundError
     */
    deleteAudio(metadata: types.DeleteAudioMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Upload text
     * Storage duration: 24-48H
     *
     * @summary Upload audio file
     * @throws FetchError<400, types.UploadAnAudio1Response400> BadRequestError
     * @throws FetchError<401, types.UploadAnAudio1Response401> AuthorizationError
     * @throws FetchError<451, types.UploadAnAudio1Response451> AudioModerationError
     */
    uploadAnAudio1(body: types.UploadAnAudio1BodyParam): Promise<FetchResponse<201, types.UploadAnAudio1Response201>>;
    /**
     * Get the user's credits items each credit item contains the remaining and total credits
     * for the user
     * With the time expiration of the credits
     *
     * @summary Get credits
     * @throws FetchError<404, types.GetCreditsResponse404> NotFoundError
     */
    getCredits(): Promise<FetchResponse<200, types.GetCreditsResponse200>>;
    /**
     * Get logo
     *
     * @throws FetchError<401, types.GetLogoResponse401> AuthorizationError
     */
    getLogo(): Promise<FetchResponse<200, types.GetLogoResponse200>>;
    /**
     * Upload logo
     *
     * @throws FetchError<400, types.UploadLogoResponse400> BadRequestError | InvalidFileSizeError | InvalidImageResolutionError
     * @throws FetchError<401, types.UploadLogoResponse401> AuthorizationError
     * @throws FetchError<415, types.UploadLogoResponse415> The image being uploaded is not supported
     */
    uploadLogo(body: types.UploadLogoBodyParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete logo
     *
     * @throws FetchError<401, types.DeleteLogoResponse401> AuthorizationError
     */
    deleteLogo(): Promise<FetchResponse<number, unknown>>;
    /**
     * Get Voices
     *
     * @throws FetchError<401, types.VoicesResponse401> AuthorizationError
     */
    voices(metadata?: types.VoicesMetadataParam): Promise<FetchResponse<200, types.VoicesResponse200>>;
    /**
     * Add a new voice to your collection of voices. Upload audio or video file to clone the
     * voice from.
     * For optimal voice cloning results, you should provide at least 30 seconds of diverse
     * high-quality audio samples.
     *
     * @summary Clone Voice
     * @throws FetchError<401, types.CloneVoiceResponse401> AuthorizationError
     */
    cloneVoice(body: types.CloneVoiceBodyParam): Promise<FetchResponse<201, types.CloneVoiceResponse201>>;
    /**
     * Delete clone voice based on voice id
     *
     * @summary Delete Voice
     * @throws FetchError<401, types.DeleteResponse401> AuthorizationError
     */
    delete(metadata: types.DeleteMetadataParam): Promise<FetchResponse<number, unknown>>;
}
declare const createSDK: SDK;
export = createSDK;
