// Seed data for the database
import {prisma} from "../../src/utils/Clients/Prisma.js"

async function main() {
  // Create a user
  const user = await prisma.user.create({
    data: {
      email: 'john@example.com',
      password: 'hashed_password_here', // In production, use proper password hashing
      first_name: 'John',
      last_name: 'Doe',
      full_name: 'John' + ' ' + 'Doe',
      // username: 'johndoe',
      phone: '1-770-736-8031',
      website: 'hildegard.org',
      address: {
        create: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874'
        }
      }
    }
  })

  // Create an album for the user
  const album = await prisma.album.create({
    data: {
      userId: user.id,
      title: 'My Vacation Photos',
      images: {
        create: [
          {
            title: 'Beach Sunset',
            url: 'https://via.placeholder.com/600/92c952',
            thumbnailUrl: 'https://via.placeholder.com/150/92c952'
          },
          {
            title: 'Mountain View',
            url: 'https://via.placeholder.com/600/771796',
            thumbnailUrl: 'https://via.placeholder.com/150/771796'
          }
        ]
      }
    }
  })

  // Create a post for the user
  await prisma.post.create({
    data: {
      userId: user.id,
      title: 'My First Post',
      body: 'This is the content of my first post...'
    }
  })

  // Create a todo for the user
  await prisma.todos.create({
    data: {
      userId: user.id,
      title: 'Finish Prisma setup',
      completed: false
    }
  })

  console.log('✅ Database has been seeded!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

