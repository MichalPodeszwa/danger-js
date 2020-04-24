import { AppCenter } from "./AppCenter"
import { Bamboo } from "./Bamboo"
import { Bitrise } from "./Bitrise"
import { BuddyBuild } from "./BuddyBuild"
import { BuddyWorks } from "./BuddyWorks"
import { Buildkite } from "./Buildkite"
import { Circle } from "./Circle"
import { CodeBuild } from "./CodeBuild"
import { Codefresh } from "./Codefresh"
import { Codeship } from "./Codeship"
import { Concourse } from "./Concourse"
import { DockerCloud } from "./DockerCloud"
import { Drone } from "./Drone"
import { FakeCI } from "./Fake"
import { GitHubActions } from "./GitHubActions"
import { GitLabCI } from "./GitLabCI"
import { Jenkins } from "./Jenkins"
import { Netlify } from "./Netlify"
import { Nevercode } from "./Nevercode"
import { Screwdriver } from "./Screwdriver"
import { Semaphore } from "./Semaphore"
import { Surf } from "./Surf"
import { TeamCity } from "./TeamCity"
import { Travis } from "./Travis"
import { VSTS } from "./VSTS"
import { BitbucketPipelines } from "./BitbucketPipelines"
import { Cirrus } from "./Cirrus"
declare const providers: (
  | typeof AppCenter
  | typeof Bamboo
  | typeof Bitrise
  | typeof BuddyBuild
  | typeof BuddyWorks
  | typeof Buildkite
  | typeof Circle
  | typeof CodeBuild
  | typeof Codefresh
  | typeof Codeship
  | typeof Concourse
  | typeof DockerCloud
  | typeof Drone
  | typeof FakeCI
  | typeof GitHubActions
  | typeof GitLabCI
  | typeof Jenkins
  | typeof Netlify
  | typeof Nevercode
  | typeof Screwdriver
  | typeof Semaphore
  | typeof Surf
  | typeof TeamCity
  | typeof Travis
  | typeof VSTS
  | typeof BitbucketPipelines
  | typeof Cirrus)[]
declare const realProviders: (
  | typeof AppCenter
  | typeof Bamboo
  | typeof BuddyBuild
  | typeof BuddyWorks
  | typeof Buildkite
  | typeof Circle
  | typeof CodeBuild
  | typeof Codefresh
  | typeof Codeship
  | typeof Concourse
  | typeof DockerCloud
  | typeof Drone
  | typeof GitHubActions
  | typeof GitLabCI
  | typeof Jenkins
  | typeof Netlify
  | typeof Nevercode
  | typeof Screwdriver
  | typeof Semaphore
  | typeof Surf
  | typeof TeamCity
  | typeof Travis
  | typeof VSTS
  | typeof Cirrus)[]
export { providers, realProviders }
