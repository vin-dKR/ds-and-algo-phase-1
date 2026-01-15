class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0
        this.next = next ?? null
    }
}

export function removeNthFromEnd(
    head: ListNode | null,
    n: number
): ListNode | null {
    const dummy = new ListNode(0, head)

    let fast: ListNode | null = dummy
    let slow: ListNode | null = dummy

    // move fast n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast!.next
    }

    // move both pointers
    while (fast !== null) {
        fast = fast.next
        slow = slow!.next
    }

    // delete nth node from end
    slow!.next = slow!.next!.next

    return dummy.next
}

