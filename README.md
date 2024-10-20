# Lehigh Valley Hackathon - *Full Stack Snacks*

## Team Members - *Full Stack Snacks*

* Angela Cui
* Ester Frank
* Ahmed Lawal
* Sophia Chen

## Project Link

* [Mindful Hawks](https://lehigh-valley-hackathon.vercel.app/)

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

### Challenges we faces

* Github merged conflicts between branches - resolved by teaching all members how to use Github properly
* AWS Lambda handler issue Internal Server error 500 or Bad Gateway error 502 - needed to use proper request and response JSON formatting or wrong arn modelId
* Merging Component files together - resolved through carefully code reviewing and looking through console
* Designing using CSS - learned how to use CSS Grids for more responsive website.

## Demo



## Project Details by component

| **Component Name** | **Description** |
|----------------|-------------|
|Chat Bot|Chat uses Bedrock and Lehigh Wellness related Knowledge Bases (from custom PDF) in S3 Buckets to curate ideal responses for students that need a quick mental chat with AI. The bot calls an API call that calls a Lambda function/handler that is written in Python.|
|Mood Tracker|Mood Tracker Description|
|Quick Tips|Quick Tips Description|
|Resources|Resources Description|

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
7. 
