## Moxie - Student Recruitment CRM

We use Nx build framework to architect, test, and build all of our projects. It is a mono repo and contains all front-end and backend apps.

### Get started

- Clone repo
- Install dependencies `yarn`

### Steps To Run In Docker

(Note: requires to run if new packages are added, Helps us from not installing node_modules again.)

```bash
docker build -t my-base-image:nx-base .
```

```bash
docker-compose build
```

```bash
docker-compose up
```

### Serve all projects

Each app can be served individually or all at once in prallel.

```
nx run-many --target=serve --all --parallel
```

### Applicaiton commands

#### Build

```
nx build <nest-app>
```

#### Build with production configuraiton

```
nx build <nest-app> --configuration=production
```

#### Serve

```
nx serve <nest-app>
```

By default serve command will run in watch mode.

#### Lint

```
nx lint <nest-app>
```

#### Test

```
nx test <nest-app>
```

#### Run tests for current changes

```
nx affected:test
```

### Run e2e tests for current changes

```
nx affected:e2e
```

### References

#### More Nx commands are available at:

[https://nx.dev/latest/react/getting-started/intro](https://nx.dev/latest/react/getting-started/intro)

#### Nestjs Documentation

[https://docs.nestjs.com/](https://docs.nestjs.com/)

#### Ant Design Pro

[https://pro.ant.design/](https://pro.ant.design/)

#### React documentation

[https://reactjs.org/](https://reactjs.org/docs/getting-started.html)

#### TypeORM documentation

[https://typeorm.io/#/](https://typeorm.io/#/)
