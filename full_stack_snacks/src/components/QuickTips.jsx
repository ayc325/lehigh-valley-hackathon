import React from "react"
import notionpic from "../assets/notionpic.jpg"
const QuickTips = () =>{
    return(
        <div className = "tips">
            <h2>Quick Tips</h2>
            <p>
                Did you know that according to the Princeton Review, Lehigh is ranked as the second most studious school, above MIT! 
                To relieve some of the stress from studying, here are some quick tips to help you manage stress, improve your mental 
                wellness, and balance schoolwork with self-care. Perfect for when you need fast and simple solutions.
            </p>
            <h3>
                Stress-Reducing Activities on Campus
            </h3>
            <p>
                <b>Lehigh BikeShare</b>
                : Lehigh's Bikeshare program offers a convenient, eco-friendly way to get around campus, 
                and can be a fun recreational activity with friends!
                <br />
                How to rent a bike: <a href = "https://auxiliaryservices.lehigh.edu/more-transportation-options/bikeshare"> BikeShare | Auxiliary Services</a>
            </p>
            <p>
                <b>Lehigh Involvement Connection (LINC)</b>
                : LINC is a virtual campus center and is the primary location to find out what events are happening on Lehigh's campus! 
                Take a break from studying to socialize with other students and get involved on campus!
                <br />
                Explore LINC: <a href = "https://lehigh.campuslabs.com/engage/"> Lehigh Involvement Center | Student Affairs</a>
            </p>
            <p>
                <b>Lehigh After Dark (LAD)</b>
                : LAD helps create a vibrant campus nightlife by sponsoring a variety of social options that do not focus on alcohol.
                <br />
                For more information: <a href = "https://studentaffairs.lehigh.edu/lehigh-after-dark-lad">Lehigh After Dark | Student Affairs</a>
            </p>
            <p>
                <b>Pet Therapy</b>
                : During finals week, Lehigh often hosts pet therapy events where students hang out with therapy dogs and relieve stress. 
                Keep an eye out in your emails to get notified when and where these events are hosted! 
            </p>
            
            <h3>Apps</h3>
            <p>There are collections of digital interfaces made to assist students with studying, staying organized, and connecting with others. 
                Here are a variety of apps to enhance your college experience and support mental wellness.
            </p>
            <p>
                <b>Google Calendar</b>
                : Google Calendar helps you organize your classes, meetings and assignments all in one place. Set reminders, schedule study sessions, 
                and manage your academic life with ease.
            </p>
            <p>
                <b>Notion</b>
                : Notion is a versitile tool for note-taking, assignment tracking, and journaling. 
                Notion is useful for both academic and personal use, with customizable templates to fit your needs.
                <br />
                <a href = "https://www.bing.com/ck/a?!&&p=be649260b6a656b6b6897cdeaee324a8fe2e4d38c61f7b914f670bde5a963cacJmltdHM9MTcyOTI5NjAwMA&ptn=3&ver=2&hsh=4&fclid=0942a05a-4f87-6ce9-04ec-b0c44e376d62&psq=notion+dowload&u=a1aHR0cHM6Ly93d3cubm90aW9uLnNvLw&ntb=1">
                    <img src = {notionpic}></img>
                </a>
            </p>
            <p>
                <b>Pomodoro Timer</b>
                : The Pomodoro Timer app encourages undistracted studying using the Pomodoro Technique -- 25 mintues of studying separated by 5 minutes of break.
                <br />
                <a href = "https://play.google.com/store/apps/details?id=com.pomodrone.app&hl=en-US&pli=1">Download Pomodoro Timer on Google Play</a>
            </p>
            <p>
                <b>Forest</b>
                : The Forest app rewards your focus by letting you grow a virtual tree! The longer you stay off your phone, 
                the bigger your tree grows. Grow a collection of unique tree species and you improve your study habits.
                <br />
                <a href = "https://www.forestapp.cc/">Download Forest</a>
            </p>
            <p>
                <b>Stompers</b>
                : Challnege your friends to a step-off! See who can take the most steps om campus and compete for the top spot.
                <br />
                <a href = "https://apps.apple.com/us/app/stompers-steps-with-friends/id6477849675">Download Stompers on the App Store</a>
            </p>
        </div>
    )
}

export default QuickTips;