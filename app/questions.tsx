/* Question 1 */
//5 Most Favorite Support Tasks
//Dig through logs to troubleshoot a customer's broken project — I enjoy this task for two main reasons: (1) I learn new things and get exposure to new code, architecture, and methodologies and (2) It's gratifying to find and fix customer problems.
//Write and maintain support articles and docs pages — I've always really enjoyed technical writing because of the creative aspect, as well as centralizing a location for documentation so my team can quickly access resources.
//Create video tutorials to help teach users a specific feature or use case — I'm passionate about teaching and I've never shied away from the camera. It's fun to provide value in a creative way where users can be fully engaged.
//Help train and onboard new support teammates — Mentoring is something I've focused within my current role and I plan to continue to do so. Providing tools for mentees to grow is rewarding just as much as seeing them succeed.
//Act as a dedicated CSE for a handful of key customers to ensure their success using Vercel — I feel this is my bread and butter. I enjoy managing a portfolio of clients where I can leverage my technical skillset and business accumen to help them achieve their goals (and help our team grow!)

//5 Least Favorite Support Tasks
//Help resolve billing issues for customers — I tend to gravitate towards more of the technical/product/troubleshooting work. Admittedly, this task seems administrative. I'm up for the challenge though!
//Find and recruit teammates for the support team — I'm all about team culture but recruiting isn't so much my forte. It just isn't where my interest lies, however, I've been known to submit at least a few referrals per year, especially if it feels like it could be a great fit :)
//Work with 3rd party partners to track down a tricky situation for a joint customer – In my current role, I sometimes work with other 3rd party vendors. I'm happy to work with other vendors, I find that they can be less responsive, with the interest of the client deprioritized, which, all-in-all, can be frustrating.
//Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites — Albeit this seems fun, it sounds like it could be frustrating especially if/when folks criticize the product. So being on "the defensive" seems like a challenge, at least from the outset.
//Scheduling time-off coverage and collaborating as part of a growing cohesive support team — If anything, I feel more neutral about this task as it's necessary and somewhat administrative. I love collaborating though and I'm always open to working with my team on any type of matter (admin, technical, etc).

/* Question 2 */
//What do you want to learn or do more of at work?
/* One thing I'd like to do more is work on strategic initiatives that provide our department with more structure and support.
So an example of that is "Office Hours" for CSEs. In my current role, I helped to create this program called CSE Office where throughout the day, any CSE can join the Office (via Zoom) to talk with other CSEs.
At first, the idea was to have an ongoing resource where any CSE could have their case-related questions answered quickly.
It's turned into a social club where we have this amazing community of CSEs who hang out and work with each other remotely throughout the day. I'd like to continue to iterate on the idea by possibly expanding it to other teams within my department. */

/* Question 3 */
//Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?
/* Recently, we experienced an ingestion outage that impacted the data displayed in the client’s UI.
I was responsible for investigating the issue by retracing the steps.
This basically involved escalating the matter through various levels within the company and meticulously reviewing my code.
Ultimately, we discovered that the issue originated with the Operations team. Despite this, I had to communicate to the client that it was a fault of our team as a whole.
I approached the situation with empathy, fully understanding the client's frustration — I'd feel the same in their position.
I made sure to apologize sincerely and acknowledge their concerns. I then explained what happened and outlined the steps we took to resolve the issue.
I then went above and beyond by identifying ways to prevent such incidents in the future, submitting a feature request for improvements.
I believe that technical problems are inevitable, but how we handle them is what truly matters. My strength lies in my ability to empathize with the client and view the situation from their perspective, ensuring they feel understood and valued. */

/* Question 4 */
//When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?
/* Edge Functions are deployed globally and they are regionally accessible, making it ideal for users who want data from a website fast. So an example would be a customer requesting data from an API endpoint.
Serverless Functions scale based on traffic demands. They are best used for handling traditional server-side data like form submissions, user authentication, and database queries. The catch is that Serverless functions are on-demand and serverless.
Edge Middleware operates pre-cache so it quickly personalizes otherwise statically-generated static content. Let's say a user is in the US, they can be sent to the English version of a site without much lag time. If they're in France, they can be sent to the German site.
 */

/* Question 5 */
//Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?
/* I'd first notify the customer that I have received their query and I'm working on a solution. I'd then take time to troubleshoot the matter. Some things I'd do are
investigate build logs, check the cache, and check the project for any other errors that catch my attention.
I'd likely need more information, so some questions I'd ask the customer are:
-What version of the framework/tech are you using? Perhaps your local version is higher than your production environment
-Are there any API or security keys for external systems that may have expired?
-How do the local builds compare to your deployments? Any difference in timing?
-Have any project settings changed (domains, environment-specific variables)?

Hopefully the customer responds with information that will help me better understand the issue so we can determine the best path forward.
*/

/* Question 6 */
//The customer from question 5 replies to your response with the below:
//“I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.” 
//Please write a follow-up reply to the customer.
/* Hello User. I'm sorry that the issue has not yet been resolved. We understand your frustration and appreciate your cooperation, especially after your continuous efforts to remedy the problem.
 In order for us to solve the issue, we'll need a bit more information from you so we can understand the root cause.
 Could you kindly provide me with clarification on the below questions (I'd list out my questions). Thank you again for your patience.
*/

/* Question 7 */
//A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog path to https://example.com?" Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
/*
 Hello User, thank you for reaching out to the Vercel Helpdesk regarding how to implement redirects in your application. There are a few different ways to approach this scenario, which I will outline below for you, each point containing corresponding documentation for your convenience.
 (1) Edge Middleware: Store the redirect in an Edge Config which allows you to update redirect values without needing to redeploy your application.
 https://vercel.com/docs/edge-network/redirects#edge-middleware

 (2) If you're using Next.js, you can redirect in a few different ways: using the redirects config, using a Next.js page, or using an API route.
 https://vercel.com/docs/edge-network/redirects#configuration-redirects

 (3) If you're not using Next.js, you can still use the redirect config or use a Serverless Function.
 https://vercel.com/docs/edge-network/redirects#serverless-functions

 (4) And lastly, if you're using Astro, you can redirect with the astro.config.ts redirect config option or return a redirect from a Server Endpoint using the redirect utility.
 https://vercel.com/docs/frameworks/astro#redirects

 I hope this helps answer your question. Please feel free to reach out if there are any additional questions.

 Notes:
 Based on my past experience, when handling cases like the above, I like to follow a simple framework: acknowledge the situation, outline the approach,
 provide steps that a user can action off of, and close the loop. I find that keeping it short and sweet is easier for the customer — they're already dealing with
 trying to solve problems for their project. So I find that keeping it as simple as possible for them is really effective.
 */

/* Question 8 */
 //A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
/*
Hello User, thank you for reaching out to the Vercel Helpdesk regarding how to ensure your project doesn't get indexed by search engines.
I will outline a solution below for you with corresponding documentation for your convenience.
You can use a x-robots-tag: noindex header to prevent the site from being indexed. Vercel actually already does this automatically for Preview deployments to prevent negative SEO impact from duplicative content.
Here's documentation that goes into more depth: https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines
Please feel free to reach out if there are any additional questions.

Notes:
Echoing my approach in Question 7, I've employed the framework of acknowledgment, outline the approach, provide actionable steps, and close the loop.
I feel that this is a fairly simple usecase that can be best answered by a concise, straightforward response :)
*/

/* Question 9 */
 //What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?
/* In our conversation, Dan mentioned that many of the customers are Hobby customers. And the recruiter I spoke with mentioned that Vercel had 80% revenue growth last year.
   So, I'm thinking that with so much growth along with the user count rapidly expanding, especially with Hobby customers, I'd guess that many of the problems customers ask Vercel about
   happen to be smaller, day-to-day issues like builds, bugs, and deployment. These are things that I've experienced while building projects as a solo developer across a variety of
   platforms. So, in the short-term, I've always really pushed for customer-enablement. So encouraging the customer to triage on their own first. Often, what that requires is strong documentation.
   So one thing I'd like to iterate on, in any capacity, is strengthening and centralizing external-facing documentation. And for the long-term, product development. So openly having conversations
   with our Product/Dev team on how we can improve the platform. And then acting on those conversations – submitting feature requests, being an active part of the conversation in Jira tickets, helping to faciliate the implementation
   of new features, and so on.
 */

/* Question 10 */
//How could we improve or alter this familiarisation exercise?
/* I really enjoyed this exercise. It was interesting to learn more about what a CSE at Vercel does on a day-to-day basis.
That said, I felt a little bit confused about what skillsets were meant to be tested. Is it that the hiring team wants to see
if candidates can run a basic deployment and navigate around a Next.js project? As well as evaluate how candidates think via their responses to the 10 questions?
The other thing that felt a bit unclear was where/how I should add my responses to the project. 
Laura then clarified that the team was looking for a deployment they we can see the questions and answers on the actual UI and,
based on the 3 hour time limit, I felt like I didn't really have enough time to focus on design (so making sure the cards are responsive, etc).
All-in-all though, this was a great learning experience. Thank you!
 */