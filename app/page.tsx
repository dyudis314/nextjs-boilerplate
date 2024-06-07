export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take-Home Exercise — Dylan Yudis — Senior CSE Role
          </a>
        </div>
      </div>
      <br></br>


      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Question 1{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            <b>5 Most Favorite Support Tasks</b><br></br>
            (1) Dig through logs to troubleshoot a customer&apos;s broken project — I enjoy this task for two main reasons: I learn new things and get exposure to new code, architecture, and methodologies and it&apos;s gratifying to find and fix customer problems.
            (2) Write and maintain support articles and docs pages — I&apos;ve always really enjoyed technical writing because of the creative aspect, as well as centralizing a location for documentation so my team can quickly access resources.
            (3) Create video tutorials to help teach users a specific feature or use case — I&apos;m passionate about teaching and I&apos;ve never shied away from the camera. It&apos;s fun to provide value in a creative way where users can be fully engaged.
            (4) Help train and onboard new support teammates — Mentoring is something I&apos;ve focused on within my current role and I plan to continue to do so. Providing tools for mentees to grow is rewarding just as much as seeing them succeed.
            (5) Act as a dedicated CSE for a handful of key customers to ensure their success using Vercel — I feel this is my bread and butter. I enjoy managing a portfolio of clients where I can leverage my technical skillset and business accumen to help them achieve their goals (and help our team grow!)
            <br></br><br></br>
            <b>5 Least Favorite Support Tasks</b><br></br>
            (1) Help resolve billing issues for customers — I tend to gravitate towards more of the technical/product/troubleshooting work. Admittedly, this task seems administrative. I&apos;m up for the challenge though!
            (2) Find and recruit teammates for the support team — I&apos;m all about team culture but recruiting isn&apos;t so much my forte. It just isn&apos;t where my interest lies, however, I&apos;ve been known to submit at least a few referrals per year, especially if it feels like it could be a great fit :)
            (3) Work with 3rd party partners to track down a tricky situation for a joint customer – In my current role, I sometimes work with other 3rd party vendors. I&apos;m happy to work with other vendors, I find that they can be less responsive, with the interest of the client deprioritized, which, all-in-all, can be frustrating.
            (4) Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites — Albeit this seems fun, it sounds like it could be frustrating especially if/when folks criticize the product. So being on &quot;the defensive&quot; seems like a challenge, at least from the outset.
            (5) Scheduling time-off coverage and collaborating as part of a growing cohesive support team — If anything, I feel more neutral about this task as it&apos;s necessary and somewhat administrative. I love collaborating though and I&apos;m always open to working with my team on any type of matter (admin, technical, etc).
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Question 2{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            <b> What do you want to learn or do more of at work?</b><br></br>
            One thing I&apos;d like to do more is work on strategic initiatives that provide our department with more structure and support.
            So an example of that is &quot;Office Hours&quot; for CSEs. In my current role, I helped to create this program called CSE Office where throughout the day, any CSE can join the Office (via Zoom) to talk with other CSEs.
            At first, the idea was to have an ongoing resource where any CSE could have their case-related questions answered quickly.
            It&apos;s turned into a social club where we have this amazing community of CSEs who hang out and work with each other remotely throughout the day. I&apos;d like to continue to iterate on the idea by possibly expanding it to other teams within my department.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Question 3{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            <b>Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?</b><br></br>
            Recently, we experienced an ingestion outage that impacted the data displayed in the client&apos;s UI.
            I was responsible for investigating the issue by retracing the steps.
            This basically involved escalating the matter through various levels within the company and meticulously reviewing my code.
            Ultimately, we discovered that the issue originated with the Operations team. Despite this, I had to communicate to the client that it was a fault of our team as a whole.
            I approached the situation with empathy, fully understanding the client&apos;s frustration — I&apos;d feel the same in their position.
            I made sure to apologize sincerely and acknowledge their concerns. I then explained what happened and outlined the steps we took to resolve the issue.
            I then went above and beyond by identifying ways to prevent such incidents in the future, submitting a feature request for improvements.
            I believe that technical problems are inevitable, but how we handle them is what truly matters. My strength lies in my ability to empathize with the client and view the situation from their perspective, ensuring they feel understood and valued.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Question 4{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            <b>When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?</b><br></br>
            Edge Functions are deployed globally and they are regionally accessible, making it ideal for users who want data from a website fast. So an example would be a customer requesting data from an API endpoint.
            Serverless Functions scale based on traffic demands. They are best used for handling traditional server-side data like form submissions, user authentication, and database queries. The catch is that Serverless functions are on-demand and serverless though.
            Edge Middleware operates pre-cache so it quickly personalizes otherwise statically-generated static content. Let&apos;s say a user is in the US, they can be sent to the English version of a site without much lag time. If they&apos;re in France, they can be sent to the French site.
          </p>
        </a>
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Question 5{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            <b>Imagine a customer writes in requesting help with a build issue on a framework or technology that you&apos;ve not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?</b><br></br>
            I&apos;d first notify the customer that I have received their query and I&apos;m working on a solution. I&apos;d then take time to troubleshoot the matter. Some things I&apos;d do are
            investigate build logs, check the cache, and check the project for any other errors that catch my attention.
            I&apos;d likely need more information, so some questions I&apos;d ask the customer are:<br></br>
            -What version of the framework/tech are you using? Perhaps your local version is higher than your production environment<br></br>
            -Are there any API or security keys for external systems that may have expired?<br></br>
            -How do the local builds compare to your deployments? Any difference in timing?<br></br>
            -Have any project settings changed (domains, environment-specific variables)?<br></br>
            Once the customer responds, I&apos;ll have a better understanding of the issue so we can determine the best path forward.
          </p>
        </a>
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Question 6{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            <b>The customer from question 5 replies to your response with the below:<br></br>
              “I&apos;m so frustrated. I&apos;ve been trying to make this work for hours and I just can&apos;t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.”
              Please write a follow-up reply to the customer.</b><br></br>
            Hello User. I&apos;m sorry that the issue has not yet been resolved. We understand your frustration and appreciate your cooperation, especially after your continuous efforts to remedy the problem.
            In order for us to solve the issue, we&apos;ll need a bit more information from you so we can understand the root cause.
            Could you kindly provide me with clarification on the below questions (I&apos;d list out my questions from the previous response or new ones dependent on the amount of information I currently have). Thank you again for your patience.
          </p>
        </a>
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Question 7{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            <b>A customer writes in to the Helpdesk asking &quot;How do I do a redirect from the /blog path to https://example.com?&quot; Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.</b><br></br>
            Hello User, thank you for reaching out to the Vercel Helpdesk regarding how to implement redirects in your application. There are a few different ways to approach this scenario, which I will outline below for you, each point containing corresponding documentation for your convenience.<br></br>
            (1) Edge Middleware: Store the redirect in an Edge Config which allows you to update redirect values without needing to redeploy your application.
            https://vercel.com/docs/edge-network/redirects#edge-middleware<br></br>

            (2) If you&apos;re using Next.js, you can redirect in a few different ways: using the redirects config, using a Next.js page, or using an API route.
            https://vercel.com/docs/edge-network/redirects#configuration-redirects<br></br>

            (3) If you&apos;re not using Next.js, you can still use the redirect config or use a Serverless Function.
            https://vercel.com/docs/edge-network/redirects#serverless-functions<br></br>

            (4) And lastly, if you&apos;re using Astro, you can redirect with the astro.config.ts redirect config option or return a redirect from a Server Endpoint using the redirect utility.
            https://vercel.com/docs/frameworks/astro#redirects<br></br>

            I hope this helps answer your question. Please feel free to reach out if there are any additional questions.<br></br>

            <b>Notes: </b><br></br>
            Based on my past experience, when handling cases like the above, I like to follow a simple framework: acknowledge the situation, outline the approach,
            provide steps that a user can action off of, and close the loop. I find that keeping it short and sweet is easier for the customer — they&apos;re already dealing with
            trying to solve problems for their project. So I find that keeping it as simple as possible for them is really effective.
          </p>
        </a>
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Question 8{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            <b>A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.</b><br></br>
            Hello User, thank you for reaching out to the Vercel Helpdesk regarding how to ensure your project doesn&apos;t get indexed by search engines.
            I will outline a solution below for you with corresponding documentation for your convenience.
            You can use a x-robots-tag: noindex header to prevent the site from being indexed. Vercel actually already does this automatically for Preview deployments to prevent negative SEO impact from duplicative content.
            Here&apos;s documentation that goes into more depth: https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines
            Please feel free to reach out if there are any additional questions.<br></br>

            <b>Notes: </b><br></br>
            Echoing my approach in Question 7, I&apos;ve employed the framework of acknowledgment, outline the approach, provide actionable steps, and close the loop.
            I feel that this is a fairly simple usecase that can be best answered by a concise, straightforward response :)
          </p>
        </a>
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Question 9{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            <b>What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?</b><br></br>
            In our conversation, Dan mentioned that many of the customers are Hobby customers. And the recruiter I spoke with mentioned that Vercel had 80% revenue growth last year.
            So, I&apos;m thinking that with so much growth along with the user count rapidly expanding, especially with Hobby customers, I&apos;d guess that many of the problems customers ask Vercel about
            happen to be smaller, day-to-day issues like builds, bugs, and deployment. These are things that I&apos;ve experienced while building projects as a solo developer across a variety of
            platforms. So, in the short-term, I&apos;ve always really pushed for customer-enablement. So encouraging the customer to triage on their own first. Often, what that requires is strong documentation.
            So one thing I&apos;d like to iterate on, in any capacity, is strengthening and centralizing external-facing documentation. And for the long-term, product development. So openly having conversations
            with our Product/Dev team on how we can improve the platform. And then acting on those conversations – submitting feature requests, being an active part of the conversation in Jira tickets, helping to faciliate the implementation
            of new features, and so on.
          </p>
        </a>
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Question 10{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            <b>How could we improve or alter this familiarisation exercise?</b><br></br>
            I really enjoyed this exercise. It was interesting to learn more about what a CSE at Vercel does on a day-to-day basis.
            That said, I felt a little bit confused about what skillsets were meant to be tested. Is it that the hiring team wants to see
            if candidates can run a basic deployment and navigate around a Next.js project? As well as evaluate how candidates think via their responses to the 10 questions?
            The other thing that felt a bit unclear was where/how I should add my responses to the project.
            Laura then clarified that the team was looking for a deployment where they can see the questions and answers on the actual UI and,
            based on the 3 hour time limit, I felt like I didn&apos;t really have enough time to focus on design (so making sure the cards are responsive, etc).
            All-in-all though, this was a great learning experience. Thank you!
          </p>
        </a>
      </div>
    </main>
  );
}
