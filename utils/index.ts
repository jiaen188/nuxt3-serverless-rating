export function getRedisKey(uid: string):string {
    // 用一个罕见的前缀
    return `$$$-${uid}`
}