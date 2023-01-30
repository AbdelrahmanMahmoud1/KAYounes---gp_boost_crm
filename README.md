# README.MD

# Read Me

## Branches

Notice the different branches

- Frontend branch
- Backend branch
- Integration branch
- Main branch

## Flow

The flow defines the policy of creating new branches, as well as, merging branches.

### frontend branch

The frontend branch contains the frontend related development.

- New **frontend features** should be branched from this branch
- When the feature is completed, **merge** with frontend branch and then **delete** the feature branch.

### backend branch

The backend branch contains the backend related development.

- New **backend features** should be branched from this branch
- When the feature is completed, **merge** with backend branch and then **delete** the feature branch.

### integration branch

The integration branch is were the backend and frontend branches are merged and integrated.

- This branch is were tests are made, and bugs are resolved.
- This is the last step before merging with the main branch.
- No branches should be created from the integration branch.

### main branch

The main branch is the deployable version of the code.

- No branches should be created from the main branch.
- Working and clean code should be pushed onto this branch.
- Reviews should be made before merging the integration branch with the main branch.
