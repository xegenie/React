-- Active: 1734580389613@@127.0.0.1@3306@todolist
-- Active: 1734580389613@@127.0.0.1@3306@aloha
DROP TABLE IF EXISTS `boards`;

CREATE TABLE `boards` (
	`no`	BIGINT	NOT NULL AUTO_INCREMENT PRIMARY KEY	COMMENT 'PK',
	`id`	VARCHAR(64)	NOT NULL	COMMENT 'UK',
	`title`	VARCHAR(100)	NOT NULL	COMMENT '제목',
	`writer`	VARCHAR(100)	NOT NULL	COMMENT '작성자',
	`content`	TEXT	NULL	COMMENT '내용',
	`created_at`	TIMESTAMP	NOT NULL	DEFAULT CURRENT_TIMESTAMP	COMMENT '등록일자',
	`updated_at`	TIMESTAMP	NOT NULL	DEFAULT CURRENT_TIMESTAMP	COMMENT '수정일자'
) COMMENT '게시판';

-- 샘플 데이터
INSERT INTO boards ( id, title, writer, content )
VALUES 
    ( UUID(), '제목1', '작성자1', '내용1' ),
    ( UUID(), '제목2', '작성자2', '내용2' ),
    ( UUID(), '제목3', '작성자3', '내용3' ),
    ( UUID(), '제목4', '작성자4', '내용4' ),
    ( UUID(), '제목5', '작성자5', '내용5' ),
    ( UUID(), '제목6', '작성자6', '내용6' ),
    ( UUID(), '제목7', '작성자7', '내용7' ),
    ( UUID(), '제목8', '작성자8', '내용8' ),
    ( UUID(), '제목9', '작성자9', '내용9' ),
    ( UUID(), '제목10', '작성자10', '내용10' )
;

DROP TABLE IF EXISTS `files`;

CREATE TABLE `files` (
	`no`	BIGINT	NOT NULL AUTO_INCREMENT PRIMARY KEY	COMMENT 'PK',
	`id`	VARCHAR(64)	NOT NULL	COMMENT 'UK',
	`p_table`	VARCHAR(100)	NOT NULL	COMMENT '부모테이블',
	`p_no`	BIGINT	NOT NULL	COMMENT '부모PK',
	`type`	ENUM('MAIN', 'SUB')	NOT NULL	DEFAULT 'SUB'	COMMENT '타입',
	`file_name`	TEXT	NOT NULL	COMMENT '파일명',
	`origin_name`	TEXT	NOT NULL	COMMENT '원본파일명',
	`file_path`	TEXT	NOT NULL	COMMENT '파일경로',
	`file_size`	BIGINT	NULL	DEFAULT 0	COMMENT '용량',
	`seq`	BIGINT	NULL	DEFAULT 0	COMMENT '순서',
	`created_at`	TIMESTAMP	NOT NULL	DEFAULT CURRENT_TIMESTAMP	COMMENT '등록일자',
	`updated_at`	TIMESTAMP	NOT NULL	DEFAULT CURRENT_TIMESTAMP	COMMENT '수정일자'
);