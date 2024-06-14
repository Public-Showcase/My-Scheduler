/**
 * HelpPage component
 */

import React from 'react'

import '../styles/Header.css'

const HelpPage = () => (
    <div>
        <table className="help_table">
            <tr>
                <td>
                    <h3>1 Do First</h3> First focus on important tasks to be
                    done the same day.
                </td>
                <td>
                    <h3>2 Schedule</h3> Important, but not-so-urgent stuff
                    should be scheduled.
                </td>
            </tr>
            <tr>
                <td>
                    <h3>3 Delegate</h3> What’s urgent, but less important,
                    delegate to others.
                </td>
                <td>
                    <h3>4 Don’t Do </h3>What’s neither urgent nor important,
                    don’t do at all.
                </td>
            </tr>
        </table>
        <hr />
        <a href="https://www.eisenhower.me/eisenhower-matrix/">
            What is the Eisenhower Matrix?
        </a>
        <hr />
        <a href="https://www.google.com/search?sxsrf=APwXEddW71F-PJ-_fuB74BnLEYrVRv_oIg:1687894126541&q=triage&si=AMnBZoFgv3j24YeLEV-qyfUcM2ZMqkxqaKobJlR97Bo25lEAtkTHXOJ2QAWtymObdvrJCGA9ZJ_VtWqV1tB8vcakkpuAGhC5yg%3D%3D&expnd=1&sa=X&ved=2ahUKEwjovdLOl-T_AhVtI0QIHTS2DLwQ2v4IegQIGxAV&biw=1680&bih=914&dpr=2#:~:text=the%20process%20of%20determining%20the%20most%20important%20people%20or%20things%20from%20amongst%20a%20large%20number%20that%20require%20attention.">
            Triage Defination
        </a>{' '}
        : the process of determining the most important people or things from
        amongst a large number that require attention
        <hr />
        <a href="https://www.mindtools.com/pages/article/newHTE_91.htm">
            Eisenhower's Urgent/Important Principle
        </a>
        <hr />
        <a href="https://medium.com/swlh/how-to-master-your-priorities-with-the-urgent-important-matrix-a7904de55266">
            How to Master your Priorities with the Urgent-Important Matrix
        </a>
        <hr />
        <iframe
            width="420"
            height="345"
            title="YouTube video"
            src="https://www.youtube.com/embed/O5Yb7t_iRaQ"
        ></iframe>
        <br />
        <a href="https://youtu.be/O5Yb7t_iRaQ">Above video link</a>
    </div>
)

export { HelpPage as default }
