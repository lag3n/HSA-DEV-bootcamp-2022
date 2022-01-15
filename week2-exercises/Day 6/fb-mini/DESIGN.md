USERS (1-to-1 Relation)
userID (number), 
Name (string)
D.O.B (date or string),
Email (string),
Password (hash -> string)
AboutMe (string)

**We combine friend requests and friends into one table**

FRIEND REQUESTS
Logic: remove row from table once requested accepts / rejects requester. Add accepted ones to Friends table.
requesterID (number)
requestedID (number)

FRIENDS
userID1 (number)
userID2 (number)

BLOCKED
blockerUserID (number)
blockedUserID (number)
status (boolean)

REPORTED
reporterUserID (number)
reportedUserID (number)
Reason (string)
DateReported(string)

GROUPS (Many-to-Many Relation)
groupID (number)
Name of Group (string)
Privacy Status (boolean)

GROUP MEMBERSHIP
ID Group/group chat
Individ ID
When they joined
Status (admin/member)

POSTS (One-to-Many Relation)
Title (string)
Content (string)
PostId (number)
Time Posted (date)
posterId (number)
friendsOnly (boolean)

COMMENTS
PostId (number)
Commenter Id (number)
Content (string)
DateCommented (dte)

GROUP MESSAGES
groupID (number)
senderID (number)
messageID (number)
Message (string)
Time Sent (time or string)

MESSAGE REACTIONS
messageID (number)
reactingUserID (number)
reaction (number enumerating reactions)
Time_sent (time or string) 
