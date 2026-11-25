import { handleEnquiry, type EnquiryEnv } from "../server/enquiry.mjs";

type WorkerEnv = Env & EnquiryEnv;

const worker = {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/enquiry" || url.pathname === "/api/enquiry/") {
      return handleEnquiry(request, env);
    }
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<WorkerEnv>;

export default worker;
