const res = JSON.parse($response.body)

res.active_expires_at = '2099-09-09T09:09:09Z'
res.is_subscription_active = true
res.active_subscription_type = 'none'
res.is_blocked = false
res.has_had_free_trial = true

$done({ body: JSON.stringify(res) })
