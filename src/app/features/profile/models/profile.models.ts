export interface ProfileUser {
  name: string;
  email: string;
  avatar: string;
  membershipLevel: string;
  rewardPoints: number;
  nextLevel: string;
  pointsToGo: number;
  progress: number;
}

export interface ProfileMenuItem {
  icon: string;
  label: string;
  route?: string;
  badge?: string;
}
