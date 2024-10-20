# Lehigh Valley Hackathon - *Full Stack Snacks*

## Team Members - *Full Stack Snacks*

* Angela Cui
* Ester Frank
* Ahmed Lawal
* Sophia Chen

## Project Link

* [Mindful Hawks](https://lehigh-valley-hackathon.vercel.app/)

## Demo

* [Google Drive Video w/ Audio](https://drive.google.com/file/d/1hV3VB2gj7uAfvF596UJCz0AktzYS6M_h/view?usp=drive_link)
* ![Video Walkthrough with Giphy w/out Audio](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHdvdHg1ZHA5aDVsMmtlY24wbGZuZzg5MzQ1YXpzcjJqZW45a2V4cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nSu780bmP3kfvZTxOz/giphy.gif)

## Project Overview

This web app consists of 4 main components: ChatBot, Mood Tracker, Quick Tips, and Resources to assist Lehigh Students with their mental health on campus.

### Selected Track

* [ ] Academic Career Success
* [ ] Course Planning
* [X] Health and Wellness
* [ ] Campus and Community Resources
* [ ] Financial and Resource Management
* [ ] Diversity, Social, and Extracurricular Engagement

### What Special Features did we include?

* [X] AI
* [X] AWS
* [X] Stunning Visuals
* [X] Mobile Compatible

### Tech Stack

1. Version Control - Git
2. Web - React - Javascript, HTML, CSS
3. AWS - S3 Buckets, Lambda - Python, API Gateway, Bedrock
4. AI - Bedrock - Claude Sonnet 3
5. Testing - Postman
6. Deployment - Vercel

### Challenges we faced

* Github merged conflicts between branches - resolved by teaching all members how to use Github properly
* AWS Lambda handler issue Internal Server error 500 or Bad Gateway error 502 - needed to use proper request and response JSON formatting or wrong arn modelId
* Merging Component files together - resolved through carefully code reviewing and looking through console
* Designing using CSS - learned how to use CSS Grids for more responsive website.

## Project Details by component

| **Component Name** | **Description** |
|----------------|-------------|
|Chat Bot|Chat uses Bedrock and Lehigh Wellness related Knowledge Bases (from custom PDF) in S3 Buckets to curate ideal responses for students that need a quick mental chat with AI. The bot calls an API call that calls a Lambda function/handler that is written in Python.|
|Mood Tracker|The Mood Tracker allows users to log their daily emotions and mental state. It helps students identify emotional patterns and trends over time by visually tracking their mood in a user-friendly interface. The data is visualized in an interactive pie chart rendered using the Recharts library. JavaScript handles the mood logging and state management, while responsive styling is provided by CSS.|
|Quick Tips & Resources |The Quick Tips feature provides immediate advice to students. This advice is aimed at relieving stress, improving focus, and managing anxiety through short, actionable tips. The Resources section offers students a curated collection of mental health tools, information, and contact points at Lehigh University. It gives students easy access to mental health services on campus.|
|Calendar|The Calendar allows provides users a convenient way to navigate between different time periods and reflect on their mental health journey. It leverages React and the React-Calendar library to provide an intuitive date-picking interface. JavaScript handles the logic behind date selection.|

## Appendix

1. [Figma](https://www.figma.com/design/fBHZMuLdJvPyBDpEDzJoBJ/Hackathon-Wireframe?node-id=2-2&node-type=canvas)
2. [Brainstorming Doc](https://docs.google.com/document/d/1w6Nevw0Hx0Vz23pH4w9rokgXpkjpYr039HTCTEwpxkw/edit?usp=sharing)

## References

1. [Colleges Where Students Study the Most](https://www.cnbc.com/2024/09/05/colleges-where-students-study-the-most-princeton-review.html)
2. [Run example Amazon Bedrock API requests through the AWS SDK for Python (Boto3)](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started-api-ex-python.html)
3. [Invoke a Lambda Function](https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-invoke-lambda.html)
4. AWS Workshop for Bedrock
5. [Anthropic Claude Messages API](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters-anthropic-claude-messages.html#model-parameters-anthropic-claude-messages-request-response)
6. [Error when Bedrock invoke Lambda](https://repost.aws/questions/QUXk7QWdzGTh-c5MIWch9NNQ/error-when-bedrock-agent-invoke-lambda)
7. [CSE Undergraduate Resources Page](https://engineering.lehigh.edu/cse/academics/undergraduate/resources)
8. [bytesandbalance/Mood-Tracker](https://github.com/bytesandbalance/Mood-Tracker/tree/main)
