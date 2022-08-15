## This is LolDesign Project.

This is a Full Stack project made for LolDesign enterprise.

#### Frontend acknowledgements

- The UI project was launched using Vite. A build tool that aims to provide a faster and leaner development experience for modern web projects.
- All the componens where built from scratch using SCSS + CSS Modules.
- We use Redux for global state management and useState React Hook for some local stuff.
- We use Jest + React Testing Library for unit and integration tests. (Such painful to make it work well with scss and css modules).
- Strongly typed u.u

#### Backend acknowledgements

- We use Express as REST hosting system.
- [The project aims to be structured using Uncle Bobs Clean Architecutre system](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean--architecture.html)
- It's currently being developed using Postgres as RDBMS, but you can problably integrate with any relational databse.
- Our ORM is Prisma. It connects our project with Postgres
- also, strongly typed c:

### Design/brainstorm/prototype
If you want to see my design prototype and brainstorm file for this project,
please grab the `.drawio` from the root by downloading it and open on https://app.diagrams.net/

### Install and run!

### Frontend:

clone the project:

```sh
git clone https://github.com/danielanthonyl/phone-carrier
```

navigate into the frontend directory:

```sh
cd ui
```

Install the project dependencies:

```sh
yarn
```

or

```sh
npm run install
```

Spin up the code:

```sh
yarn start
```

or

```sh
npm run start
```

You can also check for lintings through:

```sh
yarn eslint-diagnostics
```

```sh
npm run eslint-diagnostics
```

You can check test and coverage running:

```sh
yarn test
yarn test:coverage
```

or

```sh
npm run test
npm run test:coverage
```

### Backend:

```sh
cd backend
```

Install the project dependencies:

```sh
yarn
```

or

```sh
npm run install
```

Postgres Setup:

have `Postgres` up and running on your machine.
see more at: https://www.postgresql.org/about/

Prisma setup:
create a `.env` file with the following:

```sh
DATABASE_URL="postgresql://DATABASE-USER:USER-PASSWORD@HOST:PORT/DATABASE-NAME?schema=SCHEMA-NAME"
```

an example of a `.env` would be:

```sh
DATABASE_URL="postgresql://postgres:0000@localhost:5432/phone-carrier?schema=public"
```

head over to the prisma docs if you're in trouble: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgres

Migration & Seed:

run a migation:

```sh
yarn prisma migrate dev
```

or

```sh
npx prisma migrate dev
```

this should run the seeds as well, if it doesn't, please run:
(by seeding, you should run a query on your database and see two tables populated)

```sql
SELECT * FROM "DistanceDialingCost";
SELECT * FROM "KeepTalkingDiscount";
```

seed:

```sh
yarn seed
```

or

```sh
npm run seed
```

you can see more at: https://www.prisma.io/docs/guides/database/seed-database

Finally, spin up the backend:

```sh
yarn dev
```

or

```sh
npm run dev
```

Thats it. You should be good to go now.
If you're in trouble, feel free to reach out to me at any of my socials.

## TODO

### ui

- [ ] Animate Dropdown
- [ ] Remove nested data
- [ ] Add currency masks
- [ ] Add strong validations
- [ ] Clean up
- [ ] no anys, unknowns or nevers please xd

### backend

- [ ] Coverage with unit and integration tests
- [ ] Deploy
- [ ] Clean up
