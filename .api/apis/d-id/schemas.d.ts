declare const $Delete: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CloneVoice: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
            };
            readonly language: {
                readonly type: "string";
            };
            readonly file: {
                readonly type: "string";
                readonly format: "binary";
            };
            readonly source_url: {
                readonly type: "string";
            };
        };
        readonly required: readonly ["name", "language"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly voiceId: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["voiceId"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteAudio: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the audio file";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteImage: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteLogo: {
    readonly response: {
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCredits: {
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly credits: {
                    readonly items: {
                        readonly properties: {
                            readonly owner_id: {
                                readonly type: "string";
                            };
                            readonly created_at: {
                                readonly type: "string";
                            };
                            readonly modified_at: {
                                readonly type: "string";
                            };
                            readonly remaining: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly total: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly expire_at: {
                                readonly type: "string";
                            };
                            readonly valid_from: {
                                readonly type: "string";
                            };
                            readonly product_id: {
                                readonly type: "string";
                            };
                            readonly price_id: {
                                readonly type: "string";
                            };
                            readonly plan_group: {
                                readonly type: "string";
                            };
                            readonly product_billing_interval: {
                                readonly type: "string";
                                readonly enum: readonly ["month", "year"];
                                readonly description: "`month` `year`";
                            };
                        };
                        readonly required: readonly ["owner_id", "created_at", "modified_at", "remaining", "total", "expire_at"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly type: "array";
                };
                readonly remaining: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly total: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
            };
            readonly required: readonly ["credits", "remaining", "total"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetFaceDetection: {
    readonly body: {
        readonly properties: {
            readonly source_url: {
                readonly type: "string";
            };
            readonly should_skip_detection: {
                readonly type: "boolean";
            };
        };
        readonly required: readonly ["source_url"];
        readonly type: "object";
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly faceCrops: {
                    readonly items: {
                        readonly properties: {
                            readonly top: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly left: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly bottom: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly right: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                        };
                        readonly required: readonly ["top", "left", "bottom", "right"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly type: "array";
                };
                readonly metadata: {
                    readonly properties: {
                        readonly length: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly height: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly width: {
                            readonly type: "number";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                    };
                    readonly required: readonly ["length", "height", "width"];
                    readonly type: "object";
                };
            };
            readonly required: readonly ["faceCrops", "metadata"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetLogo: {
    readonly response: {
        readonly "200": {
            readonly required: readonly ["url", "position"];
            readonly type: readonly ["object", "null"];
            readonly additionalProperties: false;
            readonly properties: {
                readonly url: {
                    readonly type: "string";
                };
                readonly position: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UploadAnAudio: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly audio: {
                readonly type: "string";
                readonly format: "binary";
                readonly description: "The uploaded audio file, the file must not exceed 6MB in size.";
            };
            readonly source_url: {
                readonly type: "string";
            };
            readonly result_url: {
                readonly type: "string";
                readonly description: "A URL to upload the audio to. If provided, the audio will be uploaded to this URL instead of the default bucket. https presigned URL supported. S3 presigned urls should have the putObject permission with content type audio/wav.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly url: {
                    readonly type: "string";
                    readonly description: "The temporary URL of the audio.\nThis URL should be provided when creating an animation via the /animations endpoint.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "A unique identifier for the audio.\nThis identifier should be used when deleting the audio via the /audio/{id} endpoint.";
                };
                readonly duration: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly description: "The duration of the audio in seconds";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly moderation_metadata: {
                    readonly description: "The audio moderation results metadata.";
                    readonly properties: {};
                    readonly type: "object";
                };
            };
            readonly required: readonly ["url"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "451": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UploadAnAudio1: {
    readonly body: {
        readonly properties: {
            readonly script: {
                readonly description: "The script to be converted to audio.";
                readonly properties: {
                    readonly type: {
                        readonly type: readonly ["string", "null"];
                        readonly enum: readonly ["text"];
                        readonly description: "The type of the script.";
                    };
                    readonly subtitles: {
                        readonly type: "boolean";
                        readonly description: "Should subtitles be created.";
                        readonly default: "false";
                    };
                    readonly provider: {
                        readonly description: "text-to-speech provider from list of supported providers. default is microsoft tts";
                        readonly anyOf: readonly [{
                            readonly description: "AzureMicrosoft provider details, contains the provider type and requested voice id and style";
                            readonly properties: {
                                readonly type: {
                                    readonly enum: readonly ["microsoft"];
                                    readonly type: "string";
                                };
                                readonly voice_id: {
                                    readonly type: "string";
                                    readonly description: "The voice_id from the list of available voices.\nFor full list of voice_ids: https://docs.d-id.com/reference/microsoft-azure";
                                    readonly default: "en-US-JennyNeural";
                                    readonly examples: readonly ["en-US-JennyNeural"];
                                };
                                readonly voice_config: {
                                    readonly description: "Voice customization options";
                                    readonly properties: {
                                        readonly style: {
                                            readonly type: "string";
                                            readonly description: "The style of the voice.\nAvailable styles change between voices.";
                                        };
                                        readonly rate: {
                                            readonly type: "string";
                                            readonly description: "The speed of the voice.\nThe value is relative to 1, 0.5 being half speed, 2 being twice as fast, etc.\nAnother option is a constant value from x-slow/slow/medium/fast/x-fast.";
                                            readonly examples: readonly ["0.5"];
                                        };
                                        readonly pitch: {
                                            readonly type: "string";
                                            readonly description: "The pitch of the voice.\nValue could be an absolute value in Hz (including units), a relative value in Hz or st(semitones)\nor a constant value from x-low/low/medium/high/x-high.";
                                            readonly examples: readonly ["+2st"];
                                        };
                                    };
                                    readonly type: "object";
                                    readonly additionalProperties: false;
                                };
                                readonly language: {
                                    readonly type: "string";
                                    readonly description: "Voice customization options. To save the language of the selected agent voice";
                                    readonly examples: readonly ["English (United States)"];
                                };
                            };
                            readonly required: readonly ["type", "voice_id"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        }, {
                            readonly description: "Afflorithmics provider details, contains the provider type and requested voice id, available for enterprise users.";
                            readonly properties: {
                                readonly type: {
                                    readonly enum: readonly ["afflorithmics"];
                                    readonly type: "string";
                                };
                                readonly voice_id: {
                                    readonly type: "string";
                                    readonly description: "The voice_id from the list of available voices.";
                                    readonly default: "abc123DEF456";
                                    readonly examples: readonly ["abc123DEF456"];
                                };
                                readonly voice_config: {
                                    readonly description: "Voice customization options. Read more here: https://docs.audiostack.ai/reference/postspeech";
                                    readonly properties: {
                                        readonly rate: {
                                            readonly type: "string";
                                            readonly description: "The speed of the voice.\nThe value is relative to 1, 0.5 being half speed, 2 being twice as fast, etc.\nAnother option is a constant value from x-slow/slow/medium/fast/x-fast.";
                                            readonly default: "1";
                                            readonly examples: readonly ["1.2"];
                                        };
                                        readonly silencePadding: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "Amount of microseconds for silence padding. Half of the amount is inserted as silence at the beginning and at the end of each Speech file.";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly voiceIntelligence: {
                                            readonly type: "boolean";
                                            readonly description: "Flag to apply lexicographical text corrections";
                                        };
                                    };
                                    readonly type: "object";
                                    readonly additionalProperties: false;
                                };
                                readonly language: {
                                    readonly type: "string";
                                    readonly description: "Voice customization options. To save the language of the selected agent voice";
                                    readonly examples: readonly ["English (United States)"];
                                };
                            };
                            readonly required: readonly ["type", "voice_id"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        }, {
                            readonly description: "Elevenlabs provider details, contains the provider type and requested voice id, available for premium users.";
                            readonly properties: {
                                readonly type: {
                                    readonly enum: readonly ["elevenlabs"];
                                    readonly type: "string";
                                };
                                readonly voice_id: {
                                    readonly type: "string";
                                    readonly description: "The voice_id from the list of available voices. https://api.elevenlabs.io/v1/voices.";
                                    readonly default: "21m00Tcm4TlvDq8ikWAM";
                                    readonly examples: readonly ["21m00Tcm4TlvDq8ikWAM"];
                                };
                                readonly voice_config: {
                                    readonly description: "Voice customization options. Read more here: https://docs.elevenlabs.io/speech-synthesis/voice-settings";
                                    readonly properties: {
                                        readonly stability: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "How stable the voice is and the randomness of each new generation.";
                                            readonly examples: readonly ["0"];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly similarity_boost: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The similarity slider dictates how closely the AI should adhere to the original voice when attempting to replicate it.";
                                            readonly examples: readonly ["0"];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                    };
                                    readonly type: "object";
                                    readonly additionalProperties: false;
                                };
                                readonly model_id: {
                                    readonly type: "string";
                                    readonly description: "The model id from the list of available models. https://elevenlabs.io/docs/speech-synthesis/models.";
                                    readonly default: "eleven_multilingual_v2";
                                    readonly examples: readonly ["eleven_multilingual_v2"];
                                };
                                readonly shouldAddDefaultOutputFormat: {
                                    readonly type: "boolean";
                                    readonly description: "Add default outputformat to the stream request if true";
                                };
                            };
                            readonly required: readonly ["type", "voice_id"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        }, {
                            readonly description: "Amazon provider details, contains the provider type and requested voice id";
                            readonly properties: {
                                readonly type: {
                                    readonly enum: readonly ["amazon"];
                                    readonly type: "string";
                                };
                                readonly voice_id: {
                                    readonly description: "The voice_id from the list of available voices.\nFor full list of voice_ids: https://docs.d-id.com/reference/text-to-speech-providers";
                                    readonly type: readonly ["string", "null"];
                                    readonly enum: readonly ["Amy", "Aria", "Ayanda", "Bianca", "Brian", "Camila", "Emma", "Gabrielle", "Ivy", "Joanna", "Joey", "Justin", "Kendra", "Kevin", "Kimberly", "Lea", "Lucia", "Lupe", "Matthew", "Olivia", "Salli", "Seoyeon", "Takumi", "Vicki"];
                                    readonly examples: readonly ["Joanna"];
                                };
                                readonly language: {
                                    readonly type: "string";
                                    readonly description: "Voice customization options. To save the language of the selected agent voice";
                                    readonly examples: readonly ["English (United States)"];
                                };
                            };
                            readonly required: readonly ["type", "voice_id"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        }, {
                            readonly properties: {
                                readonly type: {
                                    readonly enum: readonly ["google"];
                                    readonly type: "string";
                                };
                                readonly voice_id: {
                                    readonly type: "string";
                                    readonly description: "The voice_id from the list of available voices.";
                                    readonly default: "he-IL-Wavenet-A";
                                    readonly examples: readonly ["he-IL-Wavenet-A"];
                                };
                            };
                            readonly required: readonly ["type", "voice_id"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        }, {
                            readonly properties: {
                                readonly type: {
                                    readonly enum: readonly ["playHT"];
                                    readonly type: "string";
                                };
                                readonly voice_id: {
                                    readonly type: "string";
                                    readonly description: "The voice_id from the list of available voices.";
                                    readonly default: "s3://voice-cloning-zero-shot/d82d246c-148b-457f-9668-37b789520891/adolfosaad/manifest.json";
                                    readonly examples: readonly ["s3://voice-cloning-zero-shot/d82d246c-148b-457f-9668-37b789520891/adolfosaad/manifest.json"];
                                };
                            };
                            readonly required: readonly ["type", "voice_id"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        }];
                    };
                    readonly input: {
                        readonly type: "string";
                        readonly description: "The input text that will be synthesized to an audio file.\nNote that each provider has its own limitations on the text length.";
                        readonly maxLength: 40000;
                        readonly minLength: 3;
                        readonly examples: readonly ["This is an example text"];
                    };
                    readonly ssml: {
                        readonly type: "boolean";
                        readonly description: "Is the text provided in ssml form.";
                        readonly default: "false";
                    };
                };
                readonly required: readonly ["type", "input"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
        };
        readonly required: readonly ["script"];
        readonly type: "object";
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly url: {
                    readonly type: "string";
                    readonly description: "The temporary URL of the audio.\nThis URL should be provided when creating an animation via the /animations endpoint.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "A unique identifier for the audio.\nThis identifier should be used when deleting the audio via the /audio/{id} endpoint.";
                };
                readonly duration: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly description: "The duration of the audio in seconds";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly moderation_metadata: {
                    readonly description: "The audio moderation results metadata.";
                    readonly properties: {};
                    readonly type: "object";
                };
            };
            readonly required: readonly ["url"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "451": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UploadAnImage: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly image: {
                readonly type: "string";
                readonly format: "binary";
                readonly description: "The binary data of the image";
            };
            readonly detect_faces: {
                readonly type: "string";
            };
            readonly metadata: {
                readonly type: "string";
            };
            readonly source_url: {
                readonly type: "string";
            };
            readonly result_url: {
                readonly type: "string";
                readonly description: "A URL to upload the image to. If provided, the image will be uploaded to this URL instead of the default bucket. Should be an https presigned URL. S3 presigned urls should have the putObject permission with content type matching the uploaded image.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly url: {
                    readonly type: "string";
                    readonly description: "The temporary URL of the image.\nThis URL should be provided when creating an animation via the /animations endpoint.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "A unique identifier which represents this image operation";
                };
                readonly faces: {
                    readonly items: {
                        readonly properties: {
                            readonly size: {
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly description: "Size of the square side";
                                readonly minimum: 0;
                                readonly maximum: 2147483647;
                            };
                            readonly top_left: {
                                readonly items: {
                                    readonly type: "integer";
                                    readonly format: "int32";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly type: "array";
                                readonly description: "Top left location of the face in the frame - can be negative";
                                readonly minItems: 2;
                                readonly maxItems: 2;
                            };
                            readonly overlap: {
                                readonly enum: readonly ["NO", "PARTIAL", "YES", "UNKNOWN"];
                                readonly type: "string";
                                readonly description: "`NO` `PARTIAL` `YES` `UNKNOWN`";
                            };
                            readonly face_id: {
                                readonly type: "string";
                            };
                            readonly detect_confidence: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly sharpness: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly face_occluded: {
                                readonly type: "boolean";
                            };
                            readonly face_occluded_confidence: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly detection: {
                                readonly properties: {
                                    readonly top: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly left: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly bottom: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly right: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["top", "left", "bottom", "right"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                        };
                        readonly required: readonly ["size", "top_left"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly type: "array";
                };
            };
            readonly required: readonly ["url"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "451": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UploadLogo: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly logo: {
                readonly type: "string";
                readonly format: "binary";
            };
            readonly top: {
                readonly type: "string";
            };
            readonly left: {
                readonly type: "string";
            };
        };
        readonly required: readonly ["logo", "top", "left"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "400": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Voices: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly provider: {
                    readonly enum: readonly ["amazon", "microsoft", "afflorithmics", "elevenlabs", "google", "playHT"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "filter by provider";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "filter by voice id (id is unique per provider)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly items: {
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly gender: {
                        readonly type: "string";
                    };
                    readonly locale: {
                        readonly type: "string";
                    };
                    readonly access: {
                        readonly enum: readonly ["public", "premium", "private", "external-private"];
                        readonly type: "string";
                        readonly description: "`public` `premium` `private` `external-private`";
                    };
                    readonly provider: {
                        readonly enum: readonly ["amazon", "microsoft", "afflorithmics", "elevenlabs", "google", "playHT"];
                        readonly type: "string";
                        readonly description: "`amazon` `microsoft` `afflorithmics` `elevenlabs` `google` `playHT`";
                    };
                    readonly styles: {
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly type: "array";
                    };
                    readonly language: {
                        readonly type: "string";
                    };
                    readonly accent: {
                        readonly type: "string";
                    };
                    readonly description: {
                        readonly type: "string";
                    };
                    readonly age: {
                        readonly type: "string";
                    };
                    readonly useCase: {
                        readonly type: "string";
                    };
                    readonly previewUrl: {
                        readonly type: "string";
                    };
                    readonly config: {};
                };
                readonly required: readonly ["id", "name", "gender", "locale", "access", "provider", "styles", "language"];
                readonly type: "object";
                readonly additionalProperties: true;
            };
            readonly type: "array";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly kind: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly details: {};
            };
            readonly required: readonly ["kind", "description"];
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { $Delete, CloneVoice, DeleteAudio, DeleteImage, DeleteLogo, GetCredits, GetFaceDetection, GetLogo, UploadAnAudio, UploadAnAudio1, UploadAnImage, UploadLogo, Voices };
