BEGIN TRANSACTION;

INSERT INTO 
users (
    user_name, 
    email, 
    score, 
    joined
    )
VALUES (
    'admin', 
    'admin', 
    10, 
    '2019-06-06'
);

INSERT INTO 
login (
    email, 
    hash
    )
VALUES (
    'admin', 
    '$2y$10$p44K3Xz8zhRSq5qsJv3pw.OpFQOeyAtA.EIgbcOA0VufjZqgVRfny'
);

COMMIT;