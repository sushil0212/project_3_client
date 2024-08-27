"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'd-id/0.1 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
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
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
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
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
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
    SDK.prototype.uploadAnImage = function (body) {
        return this.core.fetch('/images', 'post', body);
    };
    /**
     * Delete image
     *
     * @throws FetchError<401, types.DeleteImageResponse401> AuthorizationError
     * @throws FetchError<404, types.DeleteImageResponse404> NotFoundError
     */
    SDK.prototype.deleteImage = function (metadata) {
        return this.core.fetch('/images/{id}', 'delete', metadata);
    };
    /**
     * Get face detection
     *
     * @throws FetchError<400, types.GetFaceDetectionResponse400> BadRequestError
     * @throws FetchError<401, types.GetFaceDetectionResponse401> AuthorizationError
     * @throws FetchError<404, types.GetFaceDetectionResponse404> NotFoundError
     * @throws FetchError<415, types.GetFaceDetectionResponse415> UnsupportedMimeTypeError
     */
    SDK.prototype.getFaceDetection = function (body) {
        return this.core.fetch('/images/face-detection', 'post', body);
    };
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
    SDK.prototype.uploadAnAudio = function (body) {
        return this.core.fetch('/audios', 'post', body);
    };
    /**
     * Delete an audio file
     *
     * @throws FetchError<401, types.DeleteAudioResponse401> AuthorizationError
     * @throws FetchError<404, types.DeleteAudioResponse404> NotFoundError
     */
    SDK.prototype.deleteAudio = function (metadata) {
        return this.core.fetch('/audios/{id}', 'delete', metadata);
    };
    /**
     * Upload text
     * Storage duration: 24-48H
     *
     * @summary Upload audio file
     * @throws FetchError<400, types.UploadAnAudio1Response400> BadRequestError
     * @throws FetchError<401, types.UploadAnAudio1Response401> AuthorizationError
     * @throws FetchError<451, types.UploadAnAudio1Response451> AudioModerationError
     */
    SDK.prototype.uploadAnAudio1 = function (body) {
        return this.core.fetch('/audios/tts', 'post', body);
    };
    /**
     * Get the user's credits items each credit item contains the remaining and total credits
     * for the user
     * With the time expiration of the credits
     *
     * @summary Get credits
     * @throws FetchError<404, types.GetCreditsResponse404> NotFoundError
     */
    SDK.prototype.getCredits = function () {
        return this.core.fetch('/credits', 'get');
    };
    /**
     * Get logo
     *
     * @throws FetchError<401, types.GetLogoResponse401> AuthorizationError
     */
    SDK.prototype.getLogo = function () {
        return this.core.fetch('/settings/logo', 'get');
    };
    /**
     * Upload logo
     *
     * @throws FetchError<400, types.UploadLogoResponse400> BadRequestError | InvalidFileSizeError | InvalidImageResolutionError
     * @throws FetchError<401, types.UploadLogoResponse401> AuthorizationError
     * @throws FetchError<415, types.UploadLogoResponse415> The image being uploaded is not supported
     */
    SDK.prototype.uploadLogo = function (body) {
        return this.core.fetch('/settings/logo', 'post', body);
    };
    /**
     * Delete logo
     *
     * @throws FetchError<401, types.DeleteLogoResponse401> AuthorizationError
     */
    SDK.prototype.deleteLogo = function () {
        return this.core.fetch('/settings/logo', 'delete');
    };
    /**
     * Get Voices
     *
     * @throws FetchError<401, types.VoicesResponse401> AuthorizationError
     */
    SDK.prototype.voices = function (metadata) {
        return this.core.fetch('/tts/voices', 'get', metadata);
    };
    /**
     * Add a new voice to your collection of voices. Upload audio or video file to clone the
     * voice from.
     * For optimal voice cloning results, you should provide at least 30 seconds of diverse
     * high-quality audio samples.
     *
     * @summary Clone Voice
     * @throws FetchError<401, types.CloneVoiceResponse401> AuthorizationError
     */
    SDK.prototype.cloneVoice = function (body) {
        return this.core.fetch('/tts/voices', 'post', body);
    };
    /**
     * Delete clone voice based on voice id
     *
     * @summary Delete Voice
     * @throws FetchError<401, types.DeleteResponse401> AuthorizationError
     */
    SDK.prototype.delete = function (metadata) {
        return this.core.fetch('/tts/voices/{id}', 'delete', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
