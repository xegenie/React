CREATE TABLE `products` (
	`no`	BIGINT	NOT NULL AUTO_INCREMENT PRIMARY KEY	COMMENT 'PK',
	`id`	VARCHAR(64)	NOT NULL	COMMENT 'UK',
	`title`	VARCHAR(100)	NOT NULL	COMMENT '상품명',
	`content`	TEXT	NULL	COMMENT '설명',
	`likes`	BIGINT	NULL	DEFAULT 0	COMMENT '좋아요',
	`img`	TEXT	NULL	COMMENT '이미지경로',
	`created_at`	TIMESTAMP	NOT NULL	DEFAULT CURRENT_TIMESTAMP	COMMENT '등록일자',
	`updated_at`	TIMESTAMP	NOT NULL	DEFAULT CURRENT_TIMESTAMP	COMMENT '수정일자'
);

INSERT INTO `products` (`no`, `id`, `title`, `content`, `likes`, `img`, `created_at`, `updated_at`) VALUES
(1, 'P000001', '상품 1', '상품 1에 대한 설명입니다.', 10, 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjJfMTc4%2FMDAxNzA1OTI5OTQ3Mjc2.19mjLXbDMxCQCilf9mjPFYHPJgN2jXXjg6AdwUOzrn4g.suAQThY7ibNn9t1duaowVA7F_1UUeOBAJXjDfXuZNTgg.JPEG.hyuni_525%2FIMG_3191.JPG&type=a340', '2024-12-19 10:00:00', '2024-12-19 10:00:00'),
(2, 'P000002', '상품 2', '상품 2에 대한 설명입니다.', 20, 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjJfMTc4%2FMDAxNzA1OTI5OTQ3Mjc2.19mjLXbDMxCQCilf9mjPFYHPJgN2jXXjg6AdwUOzrn4g.suAQThY7ibNn9t1duaowVA7F_1UUeOBAJXjDfXuZNTgg.JPEG.hyuni_525%2FIMG_3191.JPG&type=a340', '2024-12-19 11:00:00', '2024-12-19 11:00:00'),
(3, 'P000003', '상품 3', '상품 3에 대한 설명입니다.', 30, 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjJfMTc4%2FMDAxNzA1OTI5OTQ3Mjc2.19mjLXbDMxCQCilf9mjPFYHPJgN2jXXjg6AdwUOzrn4g.suAQThY7ibNn9t1duaowVA7F_1UUeOBAJXjDfXuZNTgg.JPEG.hyuni_525%2FIMG_3191.JPG&type=a340', '2024-12-19 12:00:00', '2024-12-19 12:00:00'),
(4, 'P000004', '상품 4', '상품 4에 대한 설명입니다.', 40, 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjJfMTc4%2FMDAxNzA1OTI5OTQ3Mjc2.19mjLXbDMxCQCilf9mjPFYHPJgN2jXXjg6AdwUOzrn4g.suAQThY7ibNn9t1duaowVA7F_1UUeOBAJXjDfXuZNTgg.JPEG.hyuni_525%2FIMG_3191.JPG&type=a340', '2024-12-19 13:00:00', '2024-12-19 13:00:00'),
(5, 'P000005', '상품 5', '상품 5에 대한 설명입니다.', 50, 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjJfMTc4%2FMDAxNzA1OTI5OTQ3Mjc2.19mjLXbDMxCQCilf9mjPFYHPJgN2jXXjg6AdwUOzrn4g.suAQThY7ibNn9t1duaowVA7F_1UUeOBAJXjDfXuZNTgg.JPEG.hyuni_525%2FIMG_3191.JPG&type=a340', '2024-12-19 14:00:00', '2024-12-19 14:00:00'),
(6, 'P000006', '상품 6', '상품 6에 대한 설명입니다.', 60, 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjJfMTc4%2FMDAxNzA1OTI5OTQ3Mjc2.19mjLXbDMxCQCilf9mjPFYHPJgN2jXXjg6AdwUOzrn4g.suAQThY7ibNn9t1duaowVA7F_1UUeOBAJXjDfXuZNTgg.JPEG.hyuni_525%2FIMG_3191.JPG&type=a340', '2024-12-19 15:00:00', '2024-12-19 15:00:00'),
(7, 'P000007', '상품 7', '상품 7에 대한 설명입니다.', 70, 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjJfMTc4%2FMDAxNzA1OTI5OTQ3Mjc2.19mjLXbDMxCQCilf9mjPFYHPJgN2jXXjg6AdwUOzrn4g.suAQThY7ibNn9t1duaowVA7F_1UUeOBAJXjDfXuZNTgg.JPEG.hyuni_525%2FIMG_3191.JPG&type=a340', '2024-12-19 16:00:00', '2024-12-19 16:00:00'),
(8, 'P000008', '상품 8', '상품 8에 대한 설명입니다.', 80, 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjJfMTc4%2FMDAxNzA1OTI5OTQ3Mjc2.19mjLXbDMxCQCilf9mjPFYHPJgN2jXXjg6AdwUOzrn4g.suAQThY7ibNn9t1duaowVA7F_1UUeOBAJXjDfXuZNTgg.JPEG.hyuni_525%2FIMG_3191.JPG&type=a340', '2024-12-19 17:00:00', '2024-12-19 17:00:00'),
(9, 'P000009', '상품 9', '상품 9에 대한 설명입니다.', 90, 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjJfMTc4%2FMDAxNzA1OTI5OTQ3Mjc2.19mjLXbDMxCQCilf9mjPFYHPJgN2jXXjg6AdwUOzrn4g.suAQThY7ibNn9t1duaowVA7F_1UUeOBAJXjDfXuZNTgg.JPEG.hyuni_525%2FIMG_3191.JPG&type=a340', '2024-12-19 18:00:00', '2024-12-19 18:00:00'),
(10, 'P000010', '상품 10', '상품 10에 대한 설명입니다.', 100, 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjJfMTc4%2FMDAxNzA1OTI5OTQ3Mjc2.19mjLXbDMxCQCilf9mjPFYHPJgN2jXXjg6AdwUOzrn4g.suAQThY7ibNn9t1duaowVA7F_1UUeOBAJXjDfXuZNTgg.JPEG.hyuni_525%2FIMG_3191.JPG&type=a340', '2024-12-19 19:00:00', '2024-12-19 19:00:00');


