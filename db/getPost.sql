SELECT p.*, u.name as author, u.id as userId
FROM posts p
JOIN users u ON u.id = p.user_id
WHERE p.id = $1;