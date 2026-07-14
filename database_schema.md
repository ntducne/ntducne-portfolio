# Cấu trúc Cơ sở dữ liệu cho Portfolio (MongoDB)

Dưới đây là cấu trúc các Collection đề xuất:

## 1. Collection `profiles` (Hoặc `users`)
Lưu trữ toàn bộ thông tin cá nhân cơ bản và các mạng xã hội.

```json
{
  "_id": ObjectId("..."),
  "name": "Nguyen Duc",
  "email": "nguyenduc10603@gmail.com",
  "address": "Hanoi, Vietnam",
  "avatar_url": "/img.jpg",
  "introduce": {
    "text_type": "Nguyen Duc",
    "major_line_1": "Web Designer and Backend",
    "major_line_2": "Developer",
    "text": "I design and code beautifully simple things and i love what i do. Just simple like that!",
    "start_work_year": 2023,
    "projects_completed": 20,
    "num_of_clients": 2
  },
  "about_text": "I am a backend developer. I am passionate...",
  "social_links": [
    {
      "name": "Facebook",
      "link": "https://www.facebook.com/ntduc106",
      "icon_name": "FacebookFilled",
      "is_active": true,
      "order": 1
    },
    {
      "name": "Github",
      "link": "https://github.com/ntducne",
      "icon_name": "GithubFilled",
      "is_active": true,
      "order": 3
    }
  ],
  "createdAt": ISODate("2024-03-01T00:00:00Z"),
  "updatedAt": ISODate("2024-03-01T00:00:00Z")
}
```

## 2. Collection `resumes`

```json
{
  "_id": ObjectId("..."),
  "profile_id": ObjectId("..."), // Link tới collection profiles
  "time_period": "October 2021 - February 2024",
  "title": "FPT Polytechnic Education",
  "description": "I am currently studying at FPT Polytechnic Education, majoring in Information Technology.",
  "order": 1,
  "createdAt": ISODate("2024-03-01T00:00:00Z"),
  "updatedAt": ISODate("2024-03-01T00:00:00Z")
}
```

## 3. Collection `skills`

```json
{
  "_id": ObjectId("..."),
  "profile_id": ObjectId("..."),
  "name": "NextJS",
  "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "animation": "fade-up",
  "order": 1,
  "createdAt": ISODate("2024-03-01T00:00:00Z"),
  "updatedAt": ISODate("2024-03-01T00:00:00Z")
}
```

## 4. Collection `projects`

```json
{
  "_id": ObjectId("..."),
  "profile_id": ObjectId("..."),
  "name": "Hotel Management Website",
  "description": "A complete hotel management system with booking, room management, and customer portal.",
  "image_url": "https://...",
  "technology": [
    "ReactJS", 
    "Laravel", 
    "MongoDB"
  ],
  "website_link": "",
  "github_link": "",
  "order": 1,
  "createdAt": ISODate("2024-03-01T00:00:00Z"),
  "updatedAt": ISODate("2024-03-01T00:00:00Z")
}
```

## 5. Collection `contacts`

```json
{
  "_id": ObjectId("..."),
  "full_name": "John Doe",
  "email": "johndoe@example.com",
  "message": "Xin chào, tôi muốn hợp tác với bạn...", // Có thể có hoặc không tùy vào form
  "createdAt": ISODate("2024-03-01T10:00:00Z"),
  "updatedAt": ISODate("2024-03-01T10:00:00Z")
}
```