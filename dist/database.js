"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestore = void 0;
const firestore_1 = require("@google-cloud/firestore");
const config_1 = require("./config");
exports.firestore = new firestore_1.Firestore({ projectId: config_1.GCP_PROJECT });
