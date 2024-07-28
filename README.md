# 🤖 Node Prompt Gemini Function

Ask question, and let Google Gemini 1.5 Flash answer.

## 🧰 Usage

### POST /

Query the model for a completion.

**Parameters**

| Name         | Description                          | Location | Type               | Sample Value                  |
| ------------ | ------------------------------------ | -------- | ------------------ | ----------------------------- |
| Content-Type | The content type of the request body | Header   | `application/json` | N/A                           |
| prompt       | Text to prompt the model             | Body     | String             | `Write a haiku about Mondays` |

Sample `200` Response:

Response from the model.

```json
{
  "ok": true,
  "generation": "Monday's heavy weight, Dawning with a sigh of grey, Hopeful hearts await."
}
```

Sample `400` Response:

Response when the request body is missing.

```json
{
  "ok": false,
  "error": "Missing prompt"
}
```

Sample `500` Response:

Response when the model fails to respond.

```json
{
  "ok": false,
  "error": "Failed to query model."
}
```

## ⚙️ Configuration

| Setting           | Value         |
| ----------------- | ------------- |
| Runtime           | Node (18.0)   |
| Entrypoint        | `src/main.js` |
| Build Commands    | `npm install` |
| Permissions       | `any`         |
| Timeout (Seconds) | 15            |

## 🔒 Environment Variables

### GEMINI_API_KEY

A unique key used to authenticate with the Gemini API. Please note that this is a paid service and you will be charged for each request made to the API. For more information, see the [billing docs](https://ai.google.dev/gemini-api/docs/billing).

| Question      | Answer                                                       |
| ------------- | ------------------------------------------------------------ |
| Required      | Yes                                                          |
| Sample Value  | `AIz...7CQ`                                                  |
| Documentation | [Google Docs](https://ai.google.dev/gemini-api/docs/api-key) |
